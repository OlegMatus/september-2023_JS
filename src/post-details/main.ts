interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;

    [key: string]: string | number | IPost;
}

interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;

    [key: string]: string | number | IComment;
}

class PostInfo {
    public static async getPostById(): Promise<void> {
        const postId = new URL(location.href).searchParams.get('id');
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            const post: IPost = await response.json();

            const postBlock = document.querySelector('#post-details') as HTMLDivElement;
            const postList = document.createElement('ul');
            for (const key in post) {
                const li = document.createElement('li');
                li.innerText = `${key} : ${post[key]}`;
                postList.appendChild(li);
            }
            postBlock.appendChild(postList);
        } catch (e) {
            console.error('Error fetching post details:', e);
        }
    }
}

class CommentInfo {
    public static async getAllComments(): Promise<void> {
        const postId = new URL(location.href).searchParams.get('id');
       try {
           const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
           const comments: IComment[] = await response.json();

           const commentsContainer = document.querySelector('#comment-details') as HTMLDivElement;
           comments.map((comment: IComment) => {
               const commentBlock = document.createElement('div');
               const commentsList = document.createElement('ul');

               commentBlock.classList.add('comment-block');
               for (const key in comment) {
                   const li = document.createElement('li');
                   li.innerText = `${key}: ${comment[key]}`;

                   commentsList.appendChild(li);
               }
               commentBlock.appendChild(commentsList);
               commentsContainer.appendChild(commentBlock);
           })
       }catch (e) {
           console.error('Error fetching comment details:', e);
       }
    }
}

void PostInfo.getPostById();
void CommentInfo.getAllComments();