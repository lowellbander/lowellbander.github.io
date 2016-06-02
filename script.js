/**
 * Created by lowellbander on 6/1/16.
 */

var posts = [
    {
        title: 'my first post',
        body: 'my first body',
        photoURL: 'portrait.jpg'
    }, {
        title: 'my second post',
        body: 'my second body',
    }
];

document.querySelector('#content').innerHTML +=
    posts.map(({title, body, photoURL}) =>
    `<div>
        <h1>${title}</h1>
        <p>${body}</p>
        <img src="${photoURL}" />
    </div>`).join('');
