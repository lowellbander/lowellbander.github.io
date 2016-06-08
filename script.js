/**
 * Created by lowellbander on 6/5/16.
 */

var context = document.getElementById('canvas').getContext('2d');
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;
const CANVAS_WIDTH = context.canvas.width;
const CANVAS_HEIGHT = context.canvas.height;

var game = new Game(context);
