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
class UserDetails {
    constructor(userId = new URL(location.href).searchParams.get('id')) {
        this._userId = userId;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._getUser();
        });
    }
    _getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const userId = new URL(location.href).searchParams.get('id');
                const infoUserBlock = document.querySelector('#user-details');
                const btnGetTitlePost = document.querySelector('#btn-post');
                const user = yield fetch(`https://jsonplaceholder.typicode.com/users/${this._userId}`).then(resp => resp.json());
                this._showUserDetails(user, infoUserBlock);
                btnGetTitlePost.onclick = () => __awaiter(this, void 0, void 0, function* () {
                    yield this._getPostInfo(this._userId);
                });
            }
            catch (e) {
                console.error('Error fetching user:', e);
            }
        });
    }
    _showUserDetails(user, parentElement) {
        const detailsList = document.createElement('ul');
        for (const key in user) {
            const li = document.createElement('li');
            if (typeof user[key] === "object") {
                li.innerText = `${key}:`;
                const ul = document.createElement('ul');
                this._showUserDetails(user[key], ul);
                li.appendChild(ul);
            }
            else {
                li.innerText = `${key} : ${user[key]}`;
            }
            detailsList.appendChild(li);
        }
        parentElement.appendChild(detailsList);
    }
    _getPostInfo(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
                const posts = yield response.json();
                posts.map((post) => {
                    const postContainer = document.querySelector('#post-info');
                    const postBlock = document.createElement('div');
                    const linkPostDetail = document.createElement('a');
                    postBlock.classList.add('post-block');
                    postBlock.innerText = `TITLE: ${post.title}`;
                    linkPostDetail.innerText = 'post-details';
                    linkPostDetail.onclick = () => {
                        location.href = `../post-details/post-details.html?id=${post.id}`;
                    };
                    postBlock.appendChild(linkPostDetail);
                    postContainer.appendChild(postBlock);
                });
            }
            catch (e) {
                console.error('Error fetching post info:', e);
            }
        });
    }
}
const userDetails = new UserDetails();
void userDetails.run();
