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
const userService = {
    getAll: () => fetch(`https://jsonplaceholder.typicode.com/users`).then(resp => resp.json()),
    // getUserById: (): Promise<IUser> => fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(resp => resp.json()),
};
class Users {
    // private userId: string;
    // constructor() {
    //     this.userId = new URL(location.href).searchParams.get('id');
    //
    // }
    static showUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const userList = document.querySelector('#wrapper');
            const users = yield userService.getAll();
            users.forEach(user => {
                const { id, name } = user;
                const userBlock = document.createElement('div');
                const id_user = document.createElement('b');
                const name_user = document.createElement('p');
                id_user.innerText = `id: ${id}`;
                name_user.innerText = `name: ${name}`;
                userBlock.classList.add('user-block');
                const btn = document.createElement('button');
                btn.innerText = 'user-details';
                btn.classList.add('btn-userDetails');
                btn.onclick = () => {
                    location.href = `../user-details/user-details.html?id=${user.id}`;
                };
                userBlock.append(id_user, name_user, btn);
                userList.appendChild(userBlock);
            });
        });
    }
}
Users.showUsers();
