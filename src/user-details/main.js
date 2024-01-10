const getInfo = async () => {
    const userId = new URL(location.href).searchParams.get('id');

    await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(resp => resp.json())
        .then(user => {
            const userBlock = document.querySelector('#user-info');
            const postBlock = document.querySelector('#post-info');

            showUserDetails(user, userBlock);

            const postOfUser = document.querySelector('#btn-post');

            postOfUser.onclick = function () {
                getTitle();
            }
        })
    const getTitle = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(resp => resp.json())
            .then(posts => {

                posts.forEach(post => {
                    const postBlock = document.createElement('div');
                    const title = document.createElement('div');

                    postBlock.classList.add('wrapper');
                    title.classList.add('postBlock');

                    title.innerText = `TITLE: ${post.title}`;

                    postBlock.appendChild(title);
                    document.body.appendChild(postBlock);
                })
            })
    }

    function showUserDetails(user, parent) {
        const userList = document.createElement('ul');
        for (const key in user) {
            const li = document.createElement('li');

            if (typeof user[key] === "object") {
                li.innerText = `${key}:`;
                const ul = document.createElement('ul');
                showUserDetails(user[key], ul);

                li.appendChild(ul);
            } else {
                li.innerText = `${key} : ${user[key]}`;
            }
            userList.appendChild(li);
        }
        parent.append(userList);
        document.body.appendChild(parent);
    }
}
void getInfo();