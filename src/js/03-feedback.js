import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const emailField = form.querySelector('input[name="email"]')
const messageFiled = form.querySelector('textarea[name="message"]')
const localKey = 'feedback-form-state';

function storageFormData(event) {
  const formValue = {
    email: '',
    message: '',
  };

  if(localStorage.getItem(localKey)) {
    Object.assign(formValue, JSON.parse(localStorage.getItem(localKey)))
  }

  formValue[event.target.name] = event.target.value
  localStorage.setItem(localKey, JSON.stringify(formValue));
}

function checkStorage () {
  if (!localStorage.getItem(localKey)) {
    return;
  }
  const formValues = JSON.parse(localStorage.getItem(localKey))
  emailField.value = formValues.email
  messageFiled.value = formValues.message
}

function formSubmit (event) {
  event.preventDefault()
  const {
    elements: { email, message },
  } = event.currentTarget;

  console.log('email', email.value)
  console.log('message', message.value)

  emailField.value = ''
  messageFiled.value = ''
  localStorage.removeItem(localKey)
}

window.addEventListener('load', checkStorage);
form.addEventListener('input', _.throttle(storageFormData, 500));
form.addEventListener('submit', formSubmit)
