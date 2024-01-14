const getUsers = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(resp => resp.json())
        .then((users) => {
            const wrapper = document.querySelector('#wrapper');
            wrapper.classList.add('wrapper');

            users.forEach(user => {
                const {id, name} = user;

                const userBlock = document.createElement('div');
                const id_user = document.createElement('b');
                const name_user = document.createElement('p');

                id_user.innerText = `id: ${id}`;
                name_user.innerText = `name: ${name}`;

                userBlock.classList.add('user-block');

                const linkDetails = document.createElement('button');
                linkDetails.innerText = 'details';
                linkDetails.classList.add('linkDetails');

                linkDetails.onclick = () => {
                    location.href = `../user-details/user-details.html?id=${id}`
                }
                userBlock.append(id_user,name_user,linkDetails);
                wrapper.append(userBlock);
            })
        })
}
void getUsers();