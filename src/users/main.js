const getUsers = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(resp => resp.json())
        .then((users) => {
            const wrapper = document.querySelector('#wrapper');
            wrapper.classList.add('wrapper');

            users.forEach(user => {
                const userBlock = document.createElement('div');
                const {id, name} = user;
                userBlock.innerText = `id:${id}: name${name}`;
                userBlock.classList.add('user-block');

                const linkDetails = document.createElement('button');
                linkDetails.innerText = 'details';
                linkDetails.classList.add('linkDetails');

                linkDetails.onclick = () => {
                    location.href = `../user-details/user-details.html?id=${id}`
                }
                userBlock.appendChild(linkDetails);
                wrapper.append(userBlock);
            })
        })
}
void getUsers();