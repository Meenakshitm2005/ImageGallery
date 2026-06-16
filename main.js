function changeImage(imageName){
    document.querySelector('.displayed-img').src =
    `images/${imageName}`;
}
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

});

btn.addEventListener('click', () => {

```
const currentClass = btn.getAttribute('class');

if(currentClass === 'dark'){

    btn.setAttribute('class','light');
    btn.textContent = 'Restore Lighting';

    overlay.style.backgroundColor =
        'rgba(0,0,0,0.55)';

}else{

    btn.setAttribute('class','dark');
    btn.textContent = 'Gallery Lighting';

    overlay.style.backgroundColor =
        'rgba(0,0,0,0)';
}
```

});

const quotes = [
"Art enables us to find ourselves and lose ourselves at the same time.",
"Every artist was first an amateur.",
"Creativity takes courage.",
"Art is not what you see, but what you make others see.",
"Painting is poetry that is seen rather than felt.",
"A work of art is a world in itself."
];

let quoteIndex = 0;

setInterval(() => {

```
quoteIndex =
    (quoteIndex + 1) % quotes.length;

document.getElementById('quote').textContent =
    quotes[quoteIndex];
```

}, 5000);

document
.getElementById('ticketForm')
.addEventListener('submit', function(e){

```
    e.preventDefault();

    document.getElementById('message').textContent =
        "Thank you! Your visit request has been received.";

    this.reset();
});
```
