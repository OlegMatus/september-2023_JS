interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };

    [key: string]: string | number | IUser | {
        [key: string]: string | {
            [key: string]: string
        };
    };
}

interface IPost {
    id: number;
    title: string;
}

class UserDetails {
    private readonly _userId: string;

    constructor(userId: string = new URL(location.href).searchParams.get('id')) {
        this._userId = userId;
    }

    public run(): void {
        void this._getUser();
    }

    private async _getUser(): Promise<void> {
        try {
            const infoUserBlock = document.querySelector('#user-details') as HTMLDivElement;
            const btnGetTitlePost = document.querySelector('#btn-post') as HTMLButtonElement;

            const user = await fetch(`https://jsonplaceholder.typicode.com/users/${this._userId}`).then(resp => resp.json());
            this._showUserDetails(user, infoUserBlock)

            btnGetTitlePost.onclick = async (): Promise<void> => {
                await this._getPostInfo(this._userId);
            }
        } catch (e) {
            console.error('Error fetching user:', e);
        }
    }

    private _showUserDetails(user: IUser, parentElement: HTMLElement): void {
        const detailsList = document.createElement('ul');

        for (const key in user) {
            const li = document.createElement('li');
            if (typeof user[key] === "object") {
                li.innerText = `${key}:`;
                const ul = document.createElement('ul');
                this._showUserDetails(user[key] as IUser, ul);

                li.appendChild(ul);
            } else {
                li.innerText = `${key} : ${user[key]}`;
            }
            detailsList.appendChild(li);
        }
        parentElement.appendChild(detailsList);
    }

    private async _getPostInfo(userId: string): Promise<void> {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
            const posts = await response.json();
            posts.map((post: IPost) => {
                const postContainer = document.querySelector('#post-info') as HTMLDivElement;
                const postBlock = document.createElement('div');
                const linkPostDetail = document.createElement('a') as HTMLAnchorElement;

                postBlock.classList.add('post-block');

                postBlock.innerText = `TITLE: ${post.title}`;
                linkPostDetail.innerText = 'post-details';

                linkPostDetail.onclick = (): void => {
                    location.href = `../post-details/post-details.html?id=${post.id}`
                }
                postBlock.appendChild(linkPostDetail);
                postContainer.appendChild(postBlock);
            })
        } catch (e) {

        }
    }
}

const userDetails = new UserDetails();
userDetails.run();