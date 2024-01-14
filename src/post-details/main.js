const getPostById = async () => {
    const postId = new URL(location.href).searchParams.get('id');
    try {
        const postsResp = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await postsResp.json();
        const postContainer = document.querySelector('.post-detail-container');
        const postDetailList = document.createElement('ul');
        for (const postKey in post) {
            const li = document.createElement('li');
            li.innerText = `${postKey}: ${post[postKey]}`;
            postDetailList.appendChild(li);
        }
        postContainer.appendChild(postDetailList);
    } catch (e) {
console.error('Error fetching post:', e);
    }

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const comments = await response.json();
        const commentContainer = document.querySelector('.comment-detail-container');
        comments.forEach(comment => {
            const commentBlock = document.createElement('div');
            const commentList = document.createElement('ul');

            commentBlock.classList.add('comment-block');
            for (const commentKey in comment) {
                const li = document.createElement('li');
                li.innerText = `${commentKey}: ${comment[commentKey]}`;
                commentBlock.appendChild(li);
            }
        commentContainer.appendChild(commentBlock);
        })
    } catch (e) {
        console.error('Error fetching comments:', e)
    }
}
void getPostById()
