'use strict';
// recursive fibonacci sequence generator

// algo: 1 1 2 3 5
//

console.log(fib(20));

function fib(num){
    if (num == 0) {
        return 0;
    } else if ( num == 1) {
        return 1;
    } else {
        return fib(num - 1) + fib(num - 2);
    }
}
