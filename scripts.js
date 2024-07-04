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
            },
            {
                imagen: 'img/Preguntados.png',
                titulo: 'Preguntados',
                link: 'https://ilanaver.github.io/Preguntados/',
                descripcion: 'Un preguntados en la compu.'
            },
            {
                imagen: 'img/River.png',
                titulo: 'Museo de River',
                link: 'https://ilanaver.github.io/Tp3_Arte/',
                descripcion: 'Un preguntados en la compu.'
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

            const descripcion = document.createElement('p');
            descripcion.textContent = curso.descripcion;

            tarjeta.appendChild(iframe);  // Agrega el iframe en lugar de la imagen
            tarjeta.appendChild(titulo);
            tarjeta.appendChild(link);
            tarjeta.appendChild(descripcion);

            cursoContainer.appendChild(tarjeta);
        });
    }

    function createCertificatesCards() {
        const certificateContainer = document.querySelector('.certificado-container');
        if (!certificateContainer) {
            console.error("El contenedor de certificados no se encontró.");
            return;
        }

        const certificados = [
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

        certificados.forEach(certificado => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('certificado-card');

            const imagen = document.createElement('img');
            imagen.src = certificado.imagen;
            imagen.alt = certificado.titulo;
            imagen.className = 'imagen-card';

            const titulo = document.createElement('h3');
            titulo.textContent = certificado.titulo;

            const link = document.createElement('a');
            link.href = certificado.link;
            link.textContent = 'Ver proyecto';

            const descripcion = document.createElement('p');
            descripcion.textContent = certificado.descripcion;

            tarjeta.appendChild(imagen);
            tarjeta.appendChild(titulo);
            tarjeta.appendChild(link);
            tarjeta.appendChild(descripcion);

            certificateContainer.appendChild(tarjeta);
        });
    }

    function setupContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) {
            console.error("El formulario de contacto no se encontró.");
            return;
        }

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            document.getElementById('contact_number').value = Math.random() * 100000 | 0;

            const serviceID = 'service_r6tpjzs';
            const templateID = 'template_7bk6e0y';

            emailjs.sendForm(serviceID, templateID, this)
                .then(function() {
                    console.log('Formulario enviado correctamente!');
                    alert('Formulario enviado correctamente!');
                    form.reset();
                }, function(error) {
                    console.error('Error al enviar el formulario:', error);
                    alert('Hubo un problema al enviar el formulario.');
                });
        });
    }

    createProjectCards();
    createCourseCards();
    createCertificatesCards();
    setupContactForm();
});
