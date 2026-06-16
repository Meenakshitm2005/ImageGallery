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

images.forEach((image, index) => {

  const thumb = document.createElement('img');

  thumb.src = `images/${image}`;

  if(index === 0){
    thumb.classList.add('active');
  }

  thumb.addEventListener('click', () => {

    displayedImage.src = `images/${image}`;

    document.querySelectorAll('.thumb-bar img')
      .forEach(img => img.classList.remove('active'));

    thumb.classList.add('active');
  });

  thumbBar.appendChild(thumb);

});

btn.addEventListener('click', () => {

  const currentClass = btn.getAttribute('class');

  if(currentClass === 'dark'){

    btn.setAttribute('class','light');

    btn.textContent = 'Lighten';

    overlay.style.backgroundColor = 'rgba(0,0,0,0.55)';

  } else {

    btn.setAttribute('class','dark');

    btn.textContent = 'Darken';

    overlay.style.backgroundColor = 'rgba(0,0,0,0)';

  }

});
