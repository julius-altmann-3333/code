// Filter gallery by category
    function filterCategory(category) {
      const items = document.querySelectorAll('.gallery-item');
      if (category === 'all') {
        items.forEach(item => item.style.display = 'block');
      } else {
        items.forEach(item => {
          if (item.classList.contains(category)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      }
    }

    // Toggle more images on mobile
    function toggleGallery() {
      const container = document.getElementById('gallery-container');
      const button = document.getElementById('toggle-btn');
      container.classList.toggle('hidden');
      if (container.classList.contains('hidden')) {
        button.textContent = 'Show More Images';
      } else {
        button.textContent = 'Show Less';
      }
    }