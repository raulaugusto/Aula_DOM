const btn = document.getElementById('add_element');
const list = document.getElementById('main_list');

let index = 0;

btn.addEventListener('click', createElement);

function createElement() {
    const newElement = document.createElement('p');
    newElement.textContent = `Novo elemento ${index} criado!`;

    newElement.style.color = 'purple';
    newElement.style.fontSize = '20px';

    newElement.addEventListener('click', () => {
        list.removeChild(newElement);
    });

    list.appendChild(newElement);
    index++;
};