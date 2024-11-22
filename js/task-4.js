const form = document.querySelector('.login-form');

const onFormSubmit = ev => {
  ev.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    const formDate = {
      [form.elements.email.name]: email.trim(),
      [form.elements.password.name]: password.trim(),
    };
    console.log(formDate);
    form.reset();
  }
};

form.addEventListener('submit', onFormSubmit);
