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


  console.log('Script de cursor cargado'); 

  const customCursor = document.createElement('div');
  customCursor.className = 'custom-cursor';
  customCursor.style.cssText = `
    position: fixed;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #FFEB3B;
    pointer-events: none;
    z-index: 99999;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    box-shadow: 0 0 15px rgba(255, 235, 59, 0.8);
  `;
  document.body.appendChild(customCursor);

  console.log('Cursor creado:', customCursor); 


  const targetSelectors = [
    '.review-card',
    '.discipline-card',
    '.carousel-item',
    '.nav-link',
    '.custom-btn',
    '.btn-gold',
    '.carousel-control-prev',
    '.carousel-control-next'
  ];

  const targetElements = document.querySelectorAll(targetSelectors.join(', '));
  console.log('Elementos encontrados:', targetElements.length); 


  targetElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      console.log('Mouse sobre elemento'); 
      customCursor.style.opacity = '1';
      customCursor.style.animation = 'gentlePulse 2s ease-in-out infinite';
      document.body.style.cursor = 'none';
    });

    element.addEventListener('mouseleave', () => {
      console.log('Mouse fuera del elemento');
      customCursor.style.opacity = '0';
      customCursor.style.animation = 'none';
      document.body.style.cursor = '';
    });
  });


  document.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
  });
});