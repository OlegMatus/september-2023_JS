// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів

fetch('http://jsonplaceholder.typicode.com/users ')
    .then(resp => resp.json())
    .then(users => {
        // for (const user of users) {
        users.forEach(user => {
            let usersBox = document.createElement('div');
            let id = document.createElement('div');
            let name = document.createElement('div');
            let username = document.createElement('div');

            id.innerText = `id: ${user.id}`
            name.innerText = `name: ${user.name}`
            username.innerText = `username: ${user.username}`

            usersBox.append(id, name, username)
            document.body.appendChild(usersBox)
        })
    })
//     вивести їх id + name списком та додати посилання з href = user-user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => {
            let userBlock = document.createElement('div');
            let ul = document.createElement('ul');

        for (const user of users) {
            let id = document.createElement('li');
            let name = document.createElement('li');
            let username = document.createElement('li');
            let  link = document.createElement('a');

            link.href = `user-details.html?id=${user.id}`;
            link.innerText = ':user  id-name';
            id.innerText = `id: ${user.id}`;
            name.innerText = `name: ${user.name}`;
            username.innerText = `username: ${user.username}`;

           id.appendChild(link);
            ul.append(id, name, username);
            userBlock.appendChild(ul);
            document.body.appendChild(userBlock);
            }
    })



