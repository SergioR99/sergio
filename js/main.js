document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.querySelector('.preloader');

  preloader.addEventListener('animationend', function () {
      // Elimina el preloader y restaura el desplazamiento de la página
      preloader.style.display = 'none';
      document.body.style.overflow = 'auto';
  });
});


document.addEventListener('DOMContentLoaded', function () {
  // Selecciona todos los enlaces del menú
  const menuLinks = document.querySelectorAll('nav a');

  // Agrega un controlador de eventos a cada enlace
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      // Evita el comportamiento predeterminado del enlace
      e.preventDefault();

      // Obtiene el valor del atributo href del enlace
      const targetId = this.getAttribute('href').substring(1);

      // Encuentra el elemento con el ID correspondiente
      const targetElement = document.getElementById(targetId);

      // Verifica si el elemento existe
      if (targetElement) {
        // Realiza el desplazamiento suave al elemento
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});


const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.querySelector('.preloader');
  const sobreMi = document.querySelector('.sobre-mi');

  preloader.addEventListener('animationend', function () {
      // Elimina el preloader, restaura el desplazamiento y añade la clase 'loaded'
      preloader.style.display = 'none';
      document.body.style.overflow = 'auto';
      sobreMi.classList.add('loaded');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    const conocimiento = document.querySelector('.conocimientos-content');

    if (conocimiento) {
      const conocimientoPos = conocimiento.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (conocimientoPos < windowHeight / 1) {
        conocimiento.classList.add('loaded');
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    const experiencia = document.querySelector('.experiencia-content');

    if (experiencia) {
      const experienciaPos = experiencia.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (experienciaPos < windowHeight / 1) {
        experiencia.classList.add('loaded');
      }
    }
  });
});