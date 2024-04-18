// JavaScript to handle toggle functionality
const toggle = document.getElementById('toggle');

toggle.addEventListener('change', (event) => {
  if (event.target.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});
