document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.getElementById('menuToggle');
  var menu = document.getElementById('menu');

  menuToggle.addEventListener('click', function() {
      menu.classList.toggle('show');
  });

  document.addEventListener('click', function(event) {
      var isClickInside = menu.contains(event.target) || menuToggle.contains(event.target);

      if (!isClickInside) {
          menu.classList.remove('show');
      }
  });
});
