
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('seccionA').addEventListener('click', function () {
            console.log("SE CLIKEO AQUI");
            document.getElementById('Acerca-de-mi').scrollIntoView({ behavior: 'smooth' });
        });
    });
