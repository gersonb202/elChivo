document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('form');
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Formulario enviado.');
    });
});