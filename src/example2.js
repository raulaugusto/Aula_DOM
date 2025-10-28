const btn_verde = document.getElementById('btn_verde');
const btn_vermelho = document.getElementById('btn_vermelho');
const btn_azul = document.getElementById('btn_azul');
const text = document.getElementById('main_text')


btn_verde.addEventListener('click', () => {
    text.style.backgroundColor = 'green';
});

btn_vermelho.addEventListener('click', () => {
    text.style.backgroundColor = 'red';
});

btn_azul.addEventListener('click', () => {
    text.style.backgroundColor = 'blue';
});
