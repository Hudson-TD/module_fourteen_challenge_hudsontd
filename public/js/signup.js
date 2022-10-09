async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#usernameSignup').value.trim();
  const password = document.querySelector('#passwordSignup').value.trim();

  if (username && password) {
    const response = await fetch('/api/user', {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      alert('Account created! Logging you in now.');
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('#createUserBtn')
  .addEventListener('click', signupFormHandler);
