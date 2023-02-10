const h1 = document.getElementById('main-title');
h1.textContent = "Some new title!";
h1.style.color = 'purple';

const section =document.querySelector('section');
// section.style.backgroundColor = 'blue';
section.style.backgroundColor = '';
section.className = 'red-bg';

const button = document.querySelector('button');

button.addEventListener('click', () => {
    if( section.className === 'red-bg visible') {
        section.className = 'red-bg invisible';
    } else {
        section.className = 'red-bg visible';
    }

});

