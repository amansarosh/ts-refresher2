// functions
function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
// loops
function doSomething() {
    for (var i = 0; i < 56; i++) {
        console.log(i);
    }
    console.log('finally ' + i + '!');
}
doSomething();
a: number;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false]; // not best practice
// enums
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
message;
message = 'abc';
var endsWithC = message.endsWith('c');
// arrow functions
var doLog = function (message) { return console.log(message); };
var drawPoint = function (point) {
    //..
};
drawPoint({
    x: 1,
    y: 2
});
