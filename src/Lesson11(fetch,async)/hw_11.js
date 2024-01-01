// console.log('cl1');
// setTimeout(() => {
//     console.log('tm2');
// }, 2000);
//
// console.log('cl2');
//
// setTimeout(() => {
//     console.log('tm1');
// },1000)
// console.log('cl3');

// setTimeout(() => {
//     console.log('1');
//     setTimeout(() => {
//         console.log('2');
//         setTimeout(() => {
//             console.log('3');
//             setTimeout(() => {
//                 console.log('4');
//                 setTimeout(() => {
//                     console.log('5');
//                     setTimeout(() => {
//                         console.log('6');
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
//
// },1000)

// let promise = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('11111');
//         resolve();
//         }, 1000)
// });
//  let promise2 = promise
//     .then(() => {
//      new Promise((resolve) => {
//          setTimeout(() => {
//              console.log('22222');
//              resolve();
//          });
//      });
// });
//
// let promise3 = promise2
//     .then(() => {
//         new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log('33333');
//                 resolve();
//             }, 3000)
//         });
//     })
//     .then(()=> {
//             setTimeout(() => {
//                 console.log('44444');
//             })
//         }
//     )

// let x = 0;
// setTimeout(() => {
//     x = 100600
// }, 2000);
// console.log(x);


let promise = new Promise((resolve, reject) => {

   let counter = -2;
    setTimeout(() => {
        if (counter < -1) {
           reject('will not accept a value')
        }
        console.log(counter);
        counter ++;
        resolve(counter);
    }, 1000)
})
    .then((counter) => {
       return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter);
                counter++;
                resolve(counter);
            });
        })
    })
    .then((counter) => {
       return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter);
                counter++;
                resolve();
            }, 2000)
        })
    })
    .catch(reason => console.log(reason))

    // .then((counter)=> {
    //         setTimeout(() => {
    //             console.log(counter);
    //         })
    //     }
    // )


// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(todos => todos.json())
//     .then(todos => {
//         for (const todo of todos) {
//             let div = document.createElement('div');
//             div.innerText = todo.id + ' ' + todo.title;
//             // if (todo.completed){
//             //     div.classList.add('complete');
//             // }else {
//             //     div.classList.add('notComplete')
//             // }
//             todo.completed ? div.classList.add('complete') : div.classList.add('notComplete');
//             document.body.appendChild(div);
//         }
//         return fetch('https://jsonplaceholder.typicode.com/posts')
//     })
//     .then(posts => posts.json())
//     .then(posts => {
//                 for (const post of posts) {
//                     let div = document.createElement('div');
//                     let id = document.createElement('div');
//                     let title = document.createElement('div');
//                     let body = document.createElement('div');
//                     id.innerText = `ID: ${post.id}`;
//                     title.innerText = ` TITLE: ${post.title}`;
//                     body.innerText = ` BODY: ${post.body}`;
//                     div.classList.add('posts')
//
//                     div.append(id, title, body)
//                     document.body.appendChild(div);
//                 }
//             })

let resultAll = Promise
    .all([
    fetch('https://jsonplaceholder.typicode.com/todos').then(resp => resp.json()),
    fetch('https://jsonplaceholder.typicode.com/posts').then(resp => resp.json())
]);
resultAll.then(response => console.log(response))

async function foobar() {
    let todos = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(resp => resp.json());

    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json());

    console.log(todos);
    console.log(posts);

    return { todos, posts}
}

console.log(foobar());