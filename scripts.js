document.getElementById('formEmail').addEventListener('submit', function(event) {
    event.preventDefault();
    validateEmail();
});

function validateEmail() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');
    const emailIcon = document.getElementById('emailIcon'); // Agregar esta línea

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        message.style.color = "white";
        message.textContent = 'Correo registrado correctamente';
        emailIcon.src = 'valido.jpg';
        emailIcon.style.display = 'block'; // Mostrar la imagen de correo válido
    } else {
        message.style.color = 'black';
        message.textContent = 'Correo no válido';
        emailIcon.src = 'invalido.png';
        emailIcon.style.display = 'block'; // Mostrar la imagen de correo inválido
    }
}
