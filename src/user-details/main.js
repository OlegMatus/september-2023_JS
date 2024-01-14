const getUserInfo = async () => {
    try {
        const userId = new URL(location.href).searchParams.get('id');

        await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(resp => resp.json())
            .then(user => {
                const userContainer = document.querySelector('#user-info');

                showUserDetails(user, userContainer);

                const postOfUser = document.querySelector('#btn-post');

                postOfUser.onclick = function () {
                    getPostInfo(userId);
                }
                userContainer.after(postOfUser);
            })
    } catch (e) {
        console.error('Error fetching user details:', e);
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
    }

    const getPostInfo = async (userId) => {
        try {
            const responsePosts = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
            const posts = await responsePosts.json();

            posts.forEach(post => {
                const postContainer = document.querySelector('#post-info');
                const postBlock = document.createElement('div');
                const linkPostDetail = document.createElement('a');

                postBlock.classList.add('post-block');

                postBlock.innerText = `TITLE: ${post.title}`;
                linkPostDetail.innerText = 'post-details';

                linkPostDetail.onclick = () => {
                    location.href = `../post-details/post-details.html?id=${post.id}`
                }

                postBlock.appendChild(linkPostDetail);
                postContainer.appendChild(postBlock);
            })
        } catch (e) {
            console.error('Error fetching post details:', e);
        }
    }
}
void getUserInfo();