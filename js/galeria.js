document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const images = document.querySelectorAll('.imagen-galeria');
    let currentIndex = 0;
  
    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
        currentIndex = index;
      });
    });
  
    document.querySelector('.close').addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    document.querySelector('.prev').addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      modalImg.src = images[currentIndex].src;
    });
  
    document.querySelector('.next').addEventListener('click', () => {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      modalImg.src = images[currentIndex].src;
    });
  });
  