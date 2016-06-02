/**
 * Created by lowellbander on 6/1/16.
 */

var pieces = [
    new Piece({
        title: 'ink',
        body: 'ink description',
        photoURL: 'ink.jpg'
    }),
    new Piece({
        title: 'illustrator',
        body: 'illustrator description',
        photoURL: 'illustrator.jpg'
    }),
    new Piece({
        title: 'heros',
        body: 'heros description',
        photoURL: 'heros.jpg'
    }),
    new Piece({
        title: 'charcoal',
        body: 'charcoal description',
        photoURL: 'charcoal.jpg'
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
