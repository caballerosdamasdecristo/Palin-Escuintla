document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('usuario').value;
  const password = document.getElementById('contrasena').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert('Inicio de sesión exitoso');
      // Redirect to menu/menu_opciones.html
      window.location.href = 'menu/menu_opciones.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
});

// Toggle password visibility
document.getElementById('toggle-password').addEventListener('click', () => {
  const passwordField = document.getElementById('contrasena');
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
});
