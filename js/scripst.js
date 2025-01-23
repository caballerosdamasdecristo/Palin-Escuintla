// Registro de usuario
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const newUsuario = document.getElementById('newUsuario').value;
    const newContrasena = document.getElementById('newContrasena').value;

    if (newUsuario && newContrasena) {
      // Guardar usuario y contraseña en localStorage
      localStorage.setItem('usuario', newUsuario);
      localStorage.setItem('contrasena', newContrasena);
      alert('Usuario registrado exitosamente');
      window.location.href = 'index.html'; // Redirigir al inicio de sesión
    } else {
      alert('Por favor, completa todos los campos');
    }
  });
}

// Inicio de sesión
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    // Obtener datos almacenados
    const storedUsuario = localStorage.getItem('usuario');
    const storedContrasena = localStorage.getItem('contrasena');

    if (usuario === storedUsuario && contrasena === storedContrasena) {
      alert('Inicio de sesión exitoso');
      // Aquí podrías redirigir a otra página o mostrar contenido protegido
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  });
}
