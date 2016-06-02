/**
 * Created by lowellbander on 6/1/16.
 */

var posts = [
    new Post({
        title: 'self',
        body: 'self description',
        photoURL: 'self.jpg'
    }),
    new Post({
        title: 'torn',
        body: 'torn description',
        photoURL: 'torn.jpg'
    }),
    new Post({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Post({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Post({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Post({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Post({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Post({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Post({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Post({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Post({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
    new Post({
        title: 'carbcat',
        body: 'carbcat description',
        photoURL: 'carbcat.jpg'
    }),
];

var context = document.querySelector('#content');
posts.forEach(_ => _.draw(context));
