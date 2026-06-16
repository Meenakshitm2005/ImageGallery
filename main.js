const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = [
  'pic1.jpg',
  'pic2.jpg',
  'pic3.jpg',
  'pic4.jpg',
  'pic5.jpg'
];

for(let image of images){

  const thumb = document.createElement('img');

  thumb.src = `images/${image}`;

  thumbBar.appendChild(thumb);

  thumb.addEventListener('click', () => {
    displayedImage.src = `images/${image}`;
  });
}

btn.addEventListener('click', () => {

  const currentClass = btn.getAttribute('class');

  if(currentClass === 'dark'){
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.55)';
  }
  else{
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }

});