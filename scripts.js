// Función para crear tarjetas de proyectos
function createProjectCards() {
    const proyectoContainer = document.querySelector('.proyecto-container');

    // Datos de ejemplo de los proyectos
    const proyectos = [
        {
            imagen: 'CITAS.png',
            titulo: 'Agregar citas',
            link: 'https://ilanaver.github.io/Tp03_EFSI/',
            descripcion: 'Es una pagina en la que podes agregar citas.'
        },
        {
            imagen: 'TODO.png',
            titulo: 'Lista To Do',
            link: 'https://ilanaver.github.io/TP5_EFSI/',
            descripcion: 'Una pagina en la que podes agregar tareas que vayas teniendo.'
        },
        {
            imagen: 'Preguntados.png',
            titulo: 'Preguntados',
            link: 'https://ilanaver.github.io/Preguntados/',
            descripcion: 'Un preguntados en la compu.'
        },
        {
            imagen: 'River.png',
            titulo: 'Museo de River',
            link: 'https://ilanaver.github.io/Tp3_Arte/',
            descripcion: 'Un preguntados en la compu.'
        },
        // Agrega más proyectos aquí
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

// Función para crear tarjetas de cursos
function createCourseCards() {
    const cursoContainer = document.querySelector('.curso-container');

    // Datos de ejemplo de los cursos
    const cursos = [
        {
            imagen: 'curso1.jpg',
            titulo: 'Curso 1',
            link: 'https://ejemplo.com/curso1',
            descripcion: 'Descripción del Curso 1'
        },
        {
            imagen: 'curso2.jpg',
            titulo: 'Curso 2',
            link: 'https://ejemplo.com/curso2',
            descripcion: 'Descripción del Curso 2'
        },
        // Agrega más cursos aquí
    ];

    cursos.forEach(curso => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('curso-card');

        const imagen = document.createElement('img');
        imagen.src = curso.imagen;
        imagen.alt = curso.titulo;

        const titulo = document.createElement('h3');
        titulo.textContent = curso.titulo;

        const link = document.createElement('a');
        link.href = curso.link;
        link.textContent = 'Ver curso';

        const descripcion = document.createElement('p');
        descripcion.textContent = curso.descripcion;

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(link);
        tarjeta.appendChild(descripcion);

        cursoContainer.appendChild(tarjeta);
    });
}

// Función para agregar eventos al formulario de contacto
function setupContactForm() {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Aquí puedes agregar la lógica para enviar el formulario
        console.log('Formulario enviado');

        // Limpiar el formulario
        form.reset();
    });
}

// Llamar a las funciones cuando se cargue la página
window.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
    createCourseCards();
    setupContactForm();
});
