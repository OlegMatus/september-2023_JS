//     вивести їх id + name списком та додати посилання з href = user-user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => {
        let userBlock = document.getElementById('wrap');
        let ul = document.createElement('ul');

        for (const user of users) {
            let id = document.createElement('li');
            let name = document.createElement('li');
            let username = document.createElement('li');
            let btn = document.createElement('button');
            btn.classList.add('btn')

            btn.addEventListener('click', () => {
                location.href = `../user-details/user-details.html?id=${user.id}`;
            })

            id.innerText = `id: ${user.id}`;
            name.innerText = `name: ${user.name}`;
            username.innerText = `username: ${user.username}`;
            btn.innerText = 'info';

            ul.append(id, name, username, btn);
            userBlock.appendChild(ul);
            document.body.appendChild(userBlock);
        }
    })

