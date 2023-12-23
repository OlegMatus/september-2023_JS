// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================
let form1 = document.forms['f1'];
form1.onsubmit = function (ev){
    ev.preventDefault();
    let object = {
        name: this.username.value,
        surname: ev.target.surname.value,
        age: this.age.value,
    }
    let wrapper = document.createElement('div');
    let name = document.createElement('div');
    let surname = document.createElement('div');
    let age = document.createElement('div');

    // name.innerText = `Name: ${this.username.value}`
    // surname.innerText = `Surname: ${this.surname.value}`
    // age.innerText = `Age: ${this.age.value}`

    this.username.value = '';
    this.surname.value = '';
    this.age.value = '';

    wrapper.append(name, surname, age);
    document.body.appendChild(wrapper);

    let str = JSON.stringify(object);
    wrapper.innerText = `${str}`
}