document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.getElementById('menu-icon');
  var menu = document.querySelector('.drop-down-menu');
  var dropDownIcon = document.getElementById('drop-down-icon');

  var touchStartY = 0;
  var touchEndY = 0;

  menuToggle.addEventListener('click', function() {
      menu.classList.toggle('show');
  });

  document.addEventListener('click', function(event) {
      var isClickInside = menu.contains(event.target) || menuToggle.contains(event.target) || dropDownIcon.contains(event.target);

      if (!isClickInside) {
          menu.classList.remove('show');
      }
  });


  document.addEventListener('touchstart', function(event) {
      touchStartY = event.touches[0].clientY;
  });


  document.addEventListener('touchmove', function(event) {
      touchEndY = event.touches[0].clientY;
      handleTouchMove();
  });


  function handleTouchMove() {
      var touchDistance = Math.abs(touchStartY - touchEndY);

      if (touchDistance > 10) { 
          menu.classList.remove('show');
      }
  }
});
