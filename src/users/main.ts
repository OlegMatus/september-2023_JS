interface IUser {
    id: number,
    name: string,
}
const userService = {
    getAll: (): Promise<IUser[]> => fetch(`https://jsonplaceholder.typicode.com/users`).then(resp => resp.json()),
    // getUserById: (): Promise<IUser> => fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(resp => resp.json()),

}

class Users {
    // private userId: string;
    // constructor() {
    //     this.userId = new URL(location.href).searchParams.get('id');
    //
    // }
    public static async showUsers(): Promise<void> {
        const userList = document.querySelector('#wrapper') as HTMLDivElement;
        const users = await userService.getAll();
        users.forEach(user => {
            const {id, name} = user;
            const userBlock = document.createElement('div');
            const id_user = document.createElement('b');
            const name_user = document.createElement('p');

            id_user.innerText = `id: ${id}`;
            name_user.innerText = `name: ${name}`;

            userBlock.classList.add('user-block');

            const btn = document.createElement('button');
            btn.innerText = 'user-details';
            btn.classList.add('btn-userDetails');

            btn.onclick = (): void => {
                location.href = `../user-details/user-details.html?id=${user.id}`
            }
            userBlock.append(id_user,name_user,btn);
            userList.appendChild(userBlock);
        })
    }
}

Users.showUsers()
