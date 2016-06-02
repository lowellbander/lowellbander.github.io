/**
 * Created by lowellbander on 6/1/16.
 */

var pieces = [
    new Piece({
        title: 'carbcat1',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat2',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat3',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Piece({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
];

var context = document.querySelector('#content');
var scene = new Scene({pieces: pieces, context: context});
scene.render();
