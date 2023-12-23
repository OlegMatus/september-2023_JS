//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const form2 = document.forms['f2'];
form2.onsubmit = function (e) {
    e.preventDefault();
    if (Number(this.age.value) < 18) {
        return alert('access is denied')
    }
    return alert('Welcome');
}
