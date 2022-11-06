const h3 = document.createElement('h3');
h3.textContent = "I added this text with JavaScript for some reason";
document.querySelector('footer').appendChild(h3);

function answer(txt, place) {
    newp = document.createElement('p');
    newp.textContent = txt
    place.removeChild(place.firstElementChild)
    place.appendChild(newp)
}

const flex1 = document.querySelector('#flexsect1');
flex1.addEventListener('click', () => answer('Stinky fish',flex1),
    {once: true});

const flex2 = document.querySelector('#flexsect2');
flex2.addEventListener('click', () => answer('Fresno, CA',flex2),
    {once: true});

const flex3 = document.querySelector('#flexsect3');
flex3.addEventListener('click', () => answer(`Her grandparents' house`,flex3),
    {once: true});

