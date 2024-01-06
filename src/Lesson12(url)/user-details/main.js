// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів

const userId = new URL(location.href).searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(resp => resp.json())
    .then(user => {
        console.log(user);
        let userBlock = document.getElementById('wrap');
        showUserDetails(user, userBlock);
    })
function showUserDetails(user, parentElement) {
    let userList = document.createElement('ul');
    for (const key in user) {
        let li = document.createElement('li');

        if (typeof user[key] === "object") {
            li.innerText = `${key}:`;
            let ul = document.createElement('ul');
            showUserDetails(user[key], ul);
            li.appendChild(ul);
        } else {
            li.innerText = `${key} : ${user[key]}`;
        }
        userList.appendChild(li);
    }
    parentElement.appendChild(userList);
    document.body.appendChild(parentElement);
}




