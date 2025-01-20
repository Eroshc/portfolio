document.querySelectorAll('.portfolio__project-name').forEach((project) => {
  project.addEventListener('click', () => {
    const link = project.getAttribute('data-link');
    if (link) {
      window.open(link, '_blank'); // Abre el enlace en una nueva pestaña
    }
  });
});