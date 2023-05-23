// validate input checkbox------------------------------------
const parentFrom = document.querySelectorAll('form')

parentFrom.forEach((form) => {
  const checkbox = form.querySelectorAll('input[type="checkbox"]');
  const checkboxArr = Array.from(checkbox);

  checkbox.forEach((check) => {
    check.addEventListener('change', () => {
      const inputSubmit = check.closest('.form').querySelector('.btn-submit');
      const isDisabled = checkboxArr.some((ch) => !ch.checked)

      if (isDisabled) {
        inputSubmit.setAttribute('disabled', 'disabled')
      } else {
        inputSubmit.removeAttribute('disabled')
      }
    })
  })
})