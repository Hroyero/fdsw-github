
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('seccionA').addEventListener('click', function () {
            console.log("SE CLIKEO AQUI");
            document.getElementById('Acerca-de-mi').scrollIntoView({ behavior: 'smooth' });
        });
        document.getElementById('seccionB').addEventListener('click', function () {
            console.log("SE CLIKEO AQUI en mis trabajos");
            document.getElementById('Mis-trabajos').scrollIntoView({ behavior: 'smooth' });
        });
        document.getElementById('seccionC').addEventListener('click', function () {
            console.log("SE CLIKEO AQUI en mis trabajos");
            document.getElementById('Contacto').scrollIntoView({ behavior: 'smooth' });
        });
    });
