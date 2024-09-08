const input = document.getElementById('email-input');
const button = document.getElementById('submit-btn');
const errorIcon = document.querySelector('.error-icon');
const errorContainer = document.getElementById('error-container');

button.addEventListener('click', () => {
  if (input.value === '') {
    input.classList.add('error-border')
    errorIcon.style.display = 'block';
    errorContainer.style.display = 'block';
  } else (
    alert('submitted!')
  )
})
