document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    toggleButton.addEventListener('click', function() {
        navbarMenu.classList.toggle('show');
    });
});


/**
   * Porfolio isotope and filter
   */
// window.addEventListener('load', () => {
//     let portfolioContainer = select('.portfolio-container');
//     if (portfolioContainer) {
//       let portfolioIsotope = new Isotope(portfolioContainer, {
//         itemSelector: '.portfolio-item',
//         layoutMode: 'fitRows'
//       });

//       let portfolioFilters = select('#portfolio-flters li', true);

//       on('click', '#portfolio-flters li', function(e) {
//         e.preventDefault();
//         portfolioFilters.forEach(function(el) {
//           el.classList.remove('filter-active');
//         });
//         this.classList.add('filter-active');

//         portfolioIsotope.arrange({
//           filter: this.getAttribute('data-filter')
//         });
//       }, true);
//     }

//   });

//   /**
//    * Initiate portfolio lightbox 
//    */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
   });

  document.addEventListener('DOMContentLoaded', function() {
    const portfolioFilters = document.querySelectorAll('#portfolio-flters li');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioFilters.forEach(filter => {
      filter.addEventListener('click', function() {
        // Remove active class from all filters
        portfolioFilters.forEach(f => f.classList.remove('filter-active'));
        // Add active class to the clicked filter
        this.classList.add('filter-active');

        // Get the filter value
        const filterValue = this.getAttribute('data-filter');

        // Add animation class to portfolio container
        const portfolioContainer = document.querySelector('.portfolio-container');
        portfolioContainer.classList.add('animating');

        // Set timeout to allow animation to complete before showing/hiding items
        setTimeout(() => {
          // Show/hide portfolio items
          portfolioItems.forEach(item => {
            if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
              item.style.display = 'block';
              item.classList.add('fade-in');
              item.classList.remove('fade-out');
            } else {
              item.classList.add('fade-out');
              item.classList.remove('fade-in');
              setTimeout(() => {
                item.style.display = 'none';
              }, 200); // match the duration of fade-out animation
            }
          });
          // Remove animation class from portfolio container
          portfolioContainer.classList.remove('animating');
        }, 300); // match the duration of fade-out animation
      });
    });
  });


  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */

  document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress-bar');
  
    progressBars.forEach((progressBar) => {
      const value = progressBar.getAttribute('aria-valuenow');
      progressBar.style.width = `${value}%`;
    });
  });

  // function sub(){
  //   alert("sent sucessfully")
  // }
  
  