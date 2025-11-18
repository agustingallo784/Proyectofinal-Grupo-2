document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });

        const navbarCollapse = document.querySelector('#navbarNav');
        if (navbarCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navbarCollapse).hide();
        }
      }
    });
  });
})