document.addEventListener('DOMContentLoaded', function () {
      const menuToggle = document.querySelector('.menu-toggle');
      const sidebar = document.querySelector('.sidebar');
      const overlay = document.querySelector('.overlay');
      const swipeArea = document.querySelector('.swipe-area');

      // Variables for touch handling
      let touchStartX = 0;
      let touchEndX = 0;
      const swipeThreshold = 70; // Minimum distance required for a swipe

      // Toggle menu when button is clicked
      menuToggle.addEventListener('click', function () {
        toggleSidebar();
      });

      // Close sidebar when clicking on the overlay
      overlay.addEventListener('click', function () {
        closeSidebar();
      });

      // Touch events for swipe detection
      document.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      document.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, { passive: true });

      // Handle swipe logic
      function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;

        // Right swipe (to open sidebar)
        if (swipeDistance > swipeThreshold && touchStartX < 50) {
          openSidebar();
        }

        // Left swipe (to close sidebar)
        if (swipeDistance < -swipeThreshold && sidebar.classList.contains('active')) {
          closeSidebar();
        }
      }

      // Open sidebar
      function openSidebar() {
        sidebar.classList.add('active');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
      }

      // Close sidebar
      function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
      }

      // Toggle sidebar
      function toggleSidebar() {
        if (sidebar.classList.contains('active')) {
          closeSidebar();
        } else {
          openSidebar();
        }
      }
    });
