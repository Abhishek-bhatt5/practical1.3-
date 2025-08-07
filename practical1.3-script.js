const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('change', function () {
  body.classList.toggle('dark', this.checked);
});
