const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = [
  'pic1.jpg',
  'pic2.jpg',
  'pic3.jpg',
  'pic5.jpg',
  'pic6.jpg',
  'pic7.jpg'
];

images.forEach(image => {
  const thumb = document.createElement('img');

  thumb.src = `images/${image}`;

  thumb.addEventListener('click', () => {
    displayedImage.src = `images/${image}`;
  });

  thumbBar.appendChild(thumb);
});

btn.addEventListener('click', () => {
  const currentClass = btn.getAttribute('class');

  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.55)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
