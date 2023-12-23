// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
const form3 = document.forms['f3'];
const wrapper = document.getElementById('result');
const table = document.createElement('table');
table.classList.add('table', 'td')

form3.onsubmit = function (e) {
    e.preventDefault();

    const rows = this.rows.value;
    const columns = this.columns.value;
    const content = this.content.value;

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < columns; j++) {
            const td = document.createElement('td');

            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}
