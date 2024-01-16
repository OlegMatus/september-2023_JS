"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class PostInfo {
    static getPostById() {
        return __awaiter(this, void 0, void 0, function* () {
            const postId = new URL(location.href).searchParams.get('id');
            try {
                const response = yield fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                const post = yield response.json();
                const postBlock = document.querySelector('#post-details');
                const postList = document.createElement('ul');
                for (const key in post) {
                    const li = document.createElement('li');
                    li.innerText = `${key} : ${post[key]}`;
                    postList.appendChild(li);
                }
                postBlock.appendChild(postList);
            }
            catch (e) {
                console.error('Error fetching post details:', e);
            }
        });
    }
}
class CommentInfo {
    static getAllComments() {
        return __awaiter(this, void 0, void 0, function* () {
            const postId = new URL(location.href).searchParams.get('id');
            try {
                const response = yield fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
                const comments = yield response.json();
                const commentsContainer = document.querySelector('#comment-details');
                comments.map((comment) => {
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
                });
            }
            catch (e) {
                console.error('Error fetching comment details:', e);
            }
        });
    }
}
void PostInfo.getPostById();
void CommentInfo.getAllComments();
