document.addEventListener('DOMContentLoaded', () => {  // Se espera a que el contenido del DOM se haya cargado completamente antes de ejecutar la función
  const modal = document.getElementById('modal');  // Obtiene el elemento con el ID 'modal', que es el contenedor del modal que muestra la imagen
  const modalImg = document.getElementById('modal-img');  // Obtiene el elemento con el ID 'modal-img', que es la imagen dentro del modal
  const images = document.querySelectorAll('.imagen-galeria');  // Obtiene todos los elementos con la clase 'imagen-galeria', que son las imágenes en la galería
  let currentIndex = 0;  // Inicializa una variable 'currentIndex' para llevar un control de la imagen que se está mostrando

  images.forEach((img, index) => {   // Recorre todas las imágenes en la galería
    img.addEventListener('click', () => {    // Añade un evento de clic a cada imagen
      modal.style.display = 'block';  // Muestra el modal cambiando su estilo de display a 'block'
      modalImg.src = img.src;  // Establece la fuente de la imagen dentro del modal con la misma fuente de la imagen clickeada
      currentIndex = index;  // Actualiza el índice de la imagen actual
    });
  });

  document.querySelector('.close').addEventListener('click', () => {  // Añade un evento de clic al botón de cierre (con la clase 'close')
    modal.style.display = 'none';   // Cierra el modal cambiando su estilo de display a 'none'
  });

  document.querySelector('.prev').addEventListener('click', () => {  // Añade un evento de clic al botón de anterior (con la clase 'prev')
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;  // Si estamos en la primera imagen, va a la última. Si no, muestra la imagen anterior
    modalImg.src = images[currentIndex].src;  // Actualiza la imagen dentro del modal con la nueva imagen seleccionada
  });

  document.querySelector('.next').addEventListener('click', () => {  // Añade un evento de clic al botón de siguiente (con la clase 'next')
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;  // Si estamos en la última imagen, va a la primera. Si no, muestra la siguiente imagen
    modalImg.src = images[currentIndex].src;  // Actualiza la imagen dentro del modal con la nueva imagen seleccionada
  });
});
