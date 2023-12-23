// Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const h1 = document.createElement('h1');
const btn = document.createElement('button');

btn.innerText = "click";
h1.innerText = 'Welcome';


let flag = true
btn.addEventListener('click', () => {
    h1.style.display = flag ? 'none' : 'block';
    flag = !flag;
})
document.body.append(h1, btn);
