const h3 = document.createElement('h3');
h3.textContent = "I added this text with JavaScript for some reason";
document.querySelector('footer').appendChild(h3);

function answer(txt, place) {
    newp = document.createElement('p');
    newp.textContent = txt
    place.removeChild(place.firstElementChild)
    place.appendChild(newp)
}

const fsections =
    {'#flexsect1':'stinky fish'
    ,'#flexsect2':'Fresno, CA'
    , '#flexsect3':'Her grandparents\' house'}

function giveAnswers(sectList){
    for (let X in sectList){
        const sect = document.querySelector(X);
        sect.addEventListener('click', () => answer(sectList[X],sect),
        {once: true});
    }
}

giveAnswers(fsections)

