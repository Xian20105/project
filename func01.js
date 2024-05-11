function changeImage(imageSrc, link) {
  const images = document.querySelectorAll('.nav a');

  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('active'); 
  }
  link.classList.add('active'); 
  document.getElementById('displayedImage').src = imageSrc; 

  document.getElementById('displayedImage').style.display = 'block';

  document.getElementById('description').style.display = 'none';
}

function showDescription(link) {
  const images = document.querySelectorAll('.nav a');

  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('active'); 
  }
  link.classList.add('active');

  const description = document.getElementById('description');
  description.style.display = 'block'; 

  document.getElementById('displayedImage').style.display = 'none';
}