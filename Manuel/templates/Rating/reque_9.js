document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star-rating i');
    stars.forEach((star, i) => {
      star.addEventListener('click', () => {
        stars.forEach((s, j) => {
          s.classList.toggle('checked', j <= i);
          s.classList.remove('bi-star', 'bi-star-fill');
          s.classList.add(j <= i ? 'bi-star-fill' : 'bi-star');
        });
      });
    });
  });
  