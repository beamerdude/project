"use strict";

if (5 == 4) {
    console.log('ok');
} else {
    console.log('error');
}

const num1 = 50;

if (num1 < 49) {
    console.log('error');
} else if (num1 > 100) {
    console.log('много');
} else {
    console.log('ok');
}

const num = 50;

(num === 50) ? console.log('ok') : console.log('error');

const num2 = 51;

switch (num2) {
    case 49: 
        console.log('error');
        break;
    case 100:
        console.log('error');
        break;
    case 50:
        console.log('right');
        break;
    default:
        console.log('not now');
        break;
}