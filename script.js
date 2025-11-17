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

 const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  document.body.appendChild(overlay);

  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    overlay.classList.add('active');
    modal.classList.add('active');

    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    const activeModal = document.querySelector('.modal-container.active');
    if (!activeModal) return;

    overlay.classList.add('closing');
    activeModal.classList.add('closing');

    setTimeout(() => {
      overlay.classList.remove('active', 'closing');
      activeModal.classList.remove('active', 'closing');
      document.body.style.overflow = '';
    }, 350);
  };

  overlay.addEventListener('click', closeModal);

  document.querySelectorAll('.btn-close-modal').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  document.querySelectorAll('.form-card').forEach(card => {
    card.addEventListener('click', e => e.stopPropagation());
  });


  const btnClaseGratis = document.querySelector('.custom-btn');
  if (btnClaseGratis) {
    btnClaseGratis.classList.add('clase-gratis'); 
    btnClaseGratis.addEventListener('click', e => {
      e.preventDefault();
      openModal('modalContainer-clase');
    });
  }

  const btnEmpezarAhora = document.querySelector('.btn-gold');
  if (btnEmpezarAhora) {
    btnEmpezarAhora.classList.add('empezar-ahora');
    btnEmpezarAhora.addEventListener('click', e => {
      e.preventDefault();
      openModal('modalContainer-empeza');
    });
  }

 const handleSubmit = (e) => {
  e.preventDefault();
  
  const form = e.target;
  const successMsg = form.nextElementSibling; 
  form.style.opacity = '0';
  form.style.pointerEvents = 'none';

  setTimeout(() => {
    form.style.display = 'none';
    successMsg.classList.add('active');
  }, 400);

  setTimeout(() => {
    closeModal();
    setTimeout(() => {
      form.style.display = '';
      form.style.opacity = '';
      form.style.pointerEvents = '';
      successMsg.classList.remove('active');
      form.reset();
    }, 500);
  }, 5000);
};

document.getElementById('formulario-primer-clase')?.addEventListener('submit', handleSubmit);
document.getElementById('formulario-flex')?.addEventListener('submit', handleSubmit);
})