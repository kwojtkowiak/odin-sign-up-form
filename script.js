function onChange() {
  const password = document.querySelector('input[name=password]')
  const confirm = document.querySelector('input[name=repeatPassword]')
  if (confirm.value == password.value) {
    confirm.setCustomValidity('')
  } else {
    confirm.setCustomValidity('Passwords do not match')
  }
}
