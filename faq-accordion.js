document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isOpen = header.classList.contains('active');

    // Close all other open ones (optional)
    document.querySelectorAll('.accordion-content').forEach(c => {
      c.style.maxHeight = null;
      c.classList.remove('open');
    });
    document.querySelectorAll('.accordion-header').forEach(h => {
      h.classList.remove('active');
    });

    if (!isOpen) {
      header.classList.add('active');
      content.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
