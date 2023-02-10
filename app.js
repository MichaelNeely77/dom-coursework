const h1 = document.getElementById('main-title');
h1.textContent = "Some new title!";
h1.style.color = 'purple';

const section =document.querySelector('section');
// section.style.backgroundColor = 'blue';
section.style.backgroundColor = '';
section.className = 'red-bg';

const div = document.querySelector('div');
div.innerHTML = 'This is the div';

div.insertAdjacentHTML('beforeend', '<p> this is the new insertAdjacentHTML stuff');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    if( section.className === 'red-bg visible') {
        section.className = 'red-bg invisible';
    } else {
        section.className = 'red-bg visible';
    }

});

