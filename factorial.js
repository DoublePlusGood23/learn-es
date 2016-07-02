// Recursive factorial

console.log(fact(10));

function fact(num){
    if((num === 0) || (num === 1)) {  // Uses the 'strict equality' '===' over '==' which means the objects must be the same to.
        return 1;
    } else {
        return (num * fact(num - 1));
    }
}
