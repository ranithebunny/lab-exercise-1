// Each blog post has its own comment form — wire all of them up the same way
const commentForms = document.querySelectorAll('.comment-form');

commentForms.forEach(function (form) {
  const responseEl = form.querySelector('.form-response');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameInput = form.querySelector('input[name="name"]');
    const name = nameInput.value.trim();

    if (!form.checkValidity()) {
      responseEl.textContent = 'Please fill in every field before submitting.';
      return;
    }

    responseEl.textContent = `Thanks, ${name}. Your comment has been noted and will be reviewed pending a nap.`;
    form.reset();
  });
});

// A small easter egg: clicking the brand mark gets a sassy reaction
const brandMark = document.getElementById('brandMark');
const sassyLines = [
  '"I heard you the first time."',
  '"This is beneath me."',
  '"Where are my treats."',
  '"I chose today\'s outfit myself."'
];

brandMark.addEventListener('click', function (event) {
  event.preventDefault();

  const line = sassyLines[Math.floor(Math.random() * sassyLines.length)];
  let bubble = document.getElementById('sassBubble');

  if (!bubble) {
    bubble = document.createElement('span');
    bubble.id = 'sassBubble';
    bubble.style.marginLeft = '0.75rem';
    bubble.style.fontStyle = 'italic';
    bubble.style.color = 'var(--rose-dark)';
    brandMark.insertAdjacentElement('afterend', bubble);
  }

  bubble.textContent = line;
});