// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================
const block = localStorage.getItem('count1') || 0;
const numberBlock = document.getElementById('number-block');
// let currentNumber = parseInt(numberBlock.innerText);
const newNumber = (+block + 1).toString();
numberBlock.innerText = newNumber;
localStorage.setItem('count1', newNumber);
if (newNumber > 9){
    localStorage.clear()
}