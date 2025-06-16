// Parallax scrolling effect
window.addEventListener('scroll', function() {
  // Get scroll position
  const scrollPosition = window.pageYOffset;
  
  // Parallax effect for header
  const header = document.querySelector('.sample-header');
  header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
  
  // Reveal content sections when scrolled into view
  const contentSections = document.querySelectorAll('.content-section');
  
  contentSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.5) {
          section.classList.add('visible');
      }
  });
});
