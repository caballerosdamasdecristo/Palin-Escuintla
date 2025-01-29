// Importar módulos de Firebase
import { firebaseConfig } from './firebaseConfig.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('usuario').value;
    const password = document.getElementById('contrasena').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Iniciado sesión
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

  // Alternar visibilidad de contraseña y efecto de guiño
  const togglePassword = document.getElementById('toggle-password');
  const passwordField = document.getElementById('contrasena');

  togglePassword.addEventListener('click', () => {
    // Toggle the type attribute
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the eye icon
    togglePassword.textContent = type === 'password' ? '👁️' : '😉';
    setTimeout(() => {
      togglePassword.textContent = '👁️';
    }, 5000);
  });
});
