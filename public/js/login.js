async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#usernameLogin').value.trim();
  const password = document.querySelector('#passwordLogin').value.trim();

  if (username && password) {
    const response = await fetch('/api/user/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#loginBtn').addEventListener('click', loginFormHandler);

const redirect = document.getElementById('signupRedirectBtn');
redirect.addEventListener('click', redirectFunc);

function redirectFunc() {
  document.location.replace('/signup');
}
