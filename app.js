const h1 = document.getElementById('main-title');
h1.textContent = "Some new title!";
h1.style.color = 'purple';

const li = document.querySelector('li:last-of-type');
console.dir(li);

const listItemElements = document.getElementsByTagName('li');

for (const listItemEl of listItemElements) {

    // console.dir(listItemEl);

}