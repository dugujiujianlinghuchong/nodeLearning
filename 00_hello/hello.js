'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

function hi(name) {
    console.log('Hi, ' + name + '!');
}

function goodbye(name) {
    console.log('Goodbye, ' + name + '!');
}
function pinfan(num) {
    console.log(num*num);
}

module.exports = {
    greet: greet,
    hi: hi,
    goodbye: goodbye,
    pinfan:pinfan
};