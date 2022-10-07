function switchForm(className, e) {
  e.preventDefault();
  const Forms = document.querySelectorAll('form');
  const form = document.querySelector(`form.${className}`);

  Forms.forEach(item => {
    item.classList.remove('active');
  })
  form.classList.add('active');
}

const registerPassword = document.querySelector('form.register #password');
const registerConfirmPassword = document.querySelector('form.register #confirm-password');

registerPassword.addEventListener('input', function() {
  registerConfirmPassword.pattern = `${this.value}`;
})