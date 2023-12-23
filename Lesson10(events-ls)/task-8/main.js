// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

const currentTime = new Date().getTime();
const date = localStorage.getItem('lastRefresh') || currentTime;
let count = Number(localStorage.getItem('count')) || 100;

const countBlock = document.getElementById('count');
if ((currentTime - date) > 1000){
    count += 10;
    localStorage.setItem('count', count)
}
localStorage.setItem('lastRefresh',currentTime.toString());
countBlock.innerText = `${count}грн`
