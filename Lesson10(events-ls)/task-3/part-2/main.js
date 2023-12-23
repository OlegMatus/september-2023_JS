// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let json = localStorage.getItem('sessions');
let sessions = json ? JSON.parse(json) : [];
for (const session of sessions) {
    let wrapper = document.createElement('div');
    let date = document.createElement('div');
    let time = document.createElement('div');

    const dateObj = formatDate(session.date)

    date.innerText = `Date: ${dateObj.YYYY}/${dateObj.MM}/${dateObj.DD}`;
    time.innerText = `Date: ${dateObj.hh}/${dateObj.mm}/${dateObj.ss}`;

    wrapper.append(date, time);
    document.body.appendChild(wrapper);
}
function formatDate (date){
    const dateObj = new Date(date);
    const YYYY = dateObj.getFullYear().toString();
    const MM = (dateObj.getMonth()+1).toString();
    const DD = dateObj.getDate().toString();
    const hh = dateObj.getHours().toString();
    const mm = dateObj.getMinutes().toString();
    const ss = dateObj.getSeconds().toString();

    return {
        YYYY,
        MM: MM.length <2 ? `0${MM}` : MM,
        DD: DD.length <2 ? `0${DD}` : DD,
        hh: hh.length <2 ? `0${hh}` : hh,
        mm: mm.length <2 ? `0${mm}` : mm,
        ss: ss.length <2 ? `0${ss}` : ss,

    }
}