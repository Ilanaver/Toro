document.addEventListener('DOMContentLoaded', function() {
    // Inicializar EmailJS
    emailjs.init("dlm-cxzgYUtLLIgHw");

    function createProjectCards() {
        const proyectoContainer = document.querySelector('.proyecto-container');
        if (!proyectoContainer) {
            console.error("El contenedor de proyectos no se encontró.");
            return;
        }

        const proyectos = [
            {
                imagen: 'img/CITAS.png',
                titulo: 'Agregar citas',
                link: 'https://ilanaver.github.io/Tp03_EFSI/',
                descripcion: 'Es una pagina en la que podes agregar citas.'
            },
            {
                imagen: 'img/TODO.png',
                titulo: 'Lista To Do',
                link: 'https://ilanaver.github.io/TP5_EFSI/',
                descripcion: 'Una pagina en la que podes agregar tareas que vayas teniendo.'
            }
        ];

        proyectos.forEach(proyecto => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('proyecto-card');

            const imagen = document.createElement('img');
            imagen.src = proyecto.imagen;
            imagen.alt = proyecto.titulo;
            imagen.className = 'imagen-card';

            const titulo = document.createElement('h3');
            titulo.textContent = proyecto.titulo;

            const link = document.createElement('a');
            link.href = proyecto.link;
            link.textContent = 'Ver proyecto';
            link.target = '_blank';

            const descripcion = document.createElement('p');
            descripcion.textContent = proyecto.descripcion;

            tarjeta.appendChild(imagen);
            tarjeta.appendChild(titulo);
            tarjeta.appendChild(link);
            tarjeta.appendChild(descripcion);

            proyectoContainer.appendChild(tarjeta);
        });
    }

    function createCourseCards() {
        const cursoContainer = document.querySelector('.curso-container');
        if (!cursoContainer) {
            console.error("El contenedor de cursos no se encontró.");
            return;
        }

        const cursos = [
            {
                videoId: 'nKPbfIU442g&t',  
                videosrc: 'https://www.youtube.com/embed/nKPbfIU442g?si=JNZy8CXQXxa08Jq5',// Aquí colocas el ID del video de YouTube
                titulo: 'Curso de Python desde CERO (completo)',
                link: 'https://youtu.be/nKPbfIU442g?si=QEDYI8x0-BHFRgoa',
                descripcion: 'Descripción del Curso 1'
            },
            {
                videoId: 'ELSm-G201Ls&t',  // Aquí colocas el ID del video de YouTube
                videosrc: 'https://www.youtube.com/embed/ELSm-G201Ls?si=aQwrcCsaXPZDfx0R',
                titulo: 'Curso de HTML y CSS desde CERO (Completo)',
                link: 'https://www.youtube.com/embed/ELSm-G201Ls?si=Hj8GrIcZ5VsiZcYj',
                descripcion: 'Descripción del Curso 2'
            }
            // Agrega más cursos aquí si es necesario
        ];

        cursos.forEach(curso => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('curso-card');

            // Crear el iframe para el video de YouTube
            const iframe = document.createElement('iframe');
            iframe.width = '100%';
            iframe.height = '200px';  // Ajusta la altura según tus necesidades
            iframe.src = curso.videosrc;
            iframe.frameborder = 'none';
            iframe.allowFullscreen = true;

            const titulo = document.createElement('h3');
            titulo.textContent = curso.titulo;

            const link = document.createElement('a');
            link.href = curso.link;
            link.textContent = 'Ver curso';
            link.target = '_blank';


            const descripcion = document.createElement('p');
            descripcion.textContent = curso.descripcion;

            tarjeta.appendChild(iframe);  // Agrega el iframe en lugar de la imagen
            tarjeta.appendChild(titulo);
            tarjeta.appendChild(link);
            tarjeta.appendChild(descripcion);

            cursoContainer.appendChild(tarjeta);
        });
    }

    function createCertificateCards() {
        const certificadoContainer = document.querySelector('.certificado-container');
        if (!certificadoContainer) {
            console.error("El contenedor de certificados no se encontró.");
            return;
        }

        const certificados = [
            {
                imagen: 'img/Certificado basico .png',
                titulo: 'SQL (Basic)',
                descripcion: 'Certificado de Hackerrank sobre SQL, nivel basico.',
                link: 'https://www.hackerrank.com/certificates/eb3f56e950bf'
            },
            {
                imagen: 'img/Intermedio.png',
                titulo: 'SQL (Intermediate)',
                descripcion: 'Certificado de Hackerrank sobre SQL, nivel intermedio.',
                link: 'https://www.hackerrank.com/certificates/ad8d8f51b8f4'
            },
            {
                imagen: 'img/Avanzado.png',
                titulo: 'SQL (Advanced)',
                descripcion: 'Certificado de Hackerrank sobre SQL, nivel avanzado.',
                link: 'https://www.hackerrank.com/certificates/05bc7631e8eb'
            }
        ];

        certificados.forEach(certificado => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('certificado-card');

            const imagen = document.createElement('img');
            imagen.src = certificado.imagen;
            imagen.alt = certificado.titulo;
            imagen.className = 'imagen-card';

            const titulo = document.createElement('h3');
            titulo.textContent = certificado.titulo;

            const descripcion = document.createElement('p');
            descripcion.textContent = certificado.descripcion;

            const link = document.createElement('a');
            link.href = certificado.link;
            link.textContent = 'Ver certificado';
            link.target = '_blank';


            tarjeta.appendChild(imagen);
            tarjeta.appendChild(titulo);
            tarjeta.appendChild(descripcion);
            tarjeta.appendChild(link);

            certificadoContainer.appendChild(tarjeta);
        });
    }

    createProjectCards();
    createCourseCards();
    createCertificateCards();

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            var templateParams = {
                nombre: document.querySelector("input[name='nombre']").value,
                mensaje: document.querySelector("textarea[name='mensaje']").value,
                email: document.querySelector("input[name='email']").value,
            };

            emailjs.send('service_r6tpjzs', 'template_7bk6e0y', templateParams)
                .then(function(response) {
                    console.log('Correo enviado con éxito:', response.status, response.text);
                    alert("Correo enviado con éxito.");
                    form.reset();
                }, function(error) {
                    console.log('Error al enviar el correo:', error);
                    alert("Hubo un error al enviar el correo. Por favor, intenta nuevamente.");
                });
        });
    }

    // Manejo del menú móvil
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
    document.addEventListener("DOMContentLoaded", function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');
        const form = document.querySelector('form');
    
        if (menuToggle && nav) {
            menuToggle.addEventListener('click', function() {
                nav.classList.toggle('show');
            });
        }
    
        if (form) {
            form.addEventListener('submit', function(event) {
                // Detectar si es un dispositivo móvil
                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
                if (!isMobile) {
                    alert('Formulario enviado');
                }
    
                // Aquí puedes agregar el código para procesar el formulario
                // Si no deseas que el formulario se envíe realmente, puedes prevenir el envío
                // event.preventDefault();
            });
        }
    });
    
});
