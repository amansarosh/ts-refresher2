// functions

function log(message) {
    console.log(message);
}

var message = 'Hello World';
log(message);


// loops

function doSomething() {
    for (var i = 0; i < 56; i++) {
        console.log(i)
    }

    console.log('finally ' + i + '!')
}

doSomething();

type annotations

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false]  // not best practice

// enums

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red = 0, Green, Blue};
let backgroundColor = Color.Red;

type assertions

let message;
message = 'abc';
let endsWithC = (message as string).endsWith('c');

// arrow functions

let doLog = (message) => console.log(message);

// ct

interface Point {
    x:number,
    y:number
}

let drawPoint = (point: Point) => {
    //..
}

drawPoint({
    x: 1,
    y: 2
})

