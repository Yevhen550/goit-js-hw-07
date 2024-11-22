const form = document.querySelector('.login-form');

const onFormSubmit = ev => {
  ev.preventDefault();

  const formDate = {
    [form.elements.email.name]: form.elements.email.value.trim(),
    [form.elements.password.name]: form.elements.password.value.trim(),
  };

  if (form.elements.email.value === '' || form.elements.password.value === '') {
    alert('All form fields must be filled in');
  }

  console.log(formDate);

  form.reset();
};

form.addEventListener('submit', onFormSubmit);
