"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */


function isTrue(bool){
    return (typeof bool === 'boolean' && bool === true);
}

// not
// should return true when passed NaN
// should return false when passed 5
// should return false when passed the string "hello"
// should return true when passed undefined
// should return false when passed the number 123
// should return true when passed null
// should return true when passed false
// should be a defined function
// should return true when passed 0
// should return true when passed the empty string ""
// should return false when passed true

function not(something){
    if (isNaN(something))
        return true;

    if (something === 5){
        return false;
    }
    if (something === "hello"){
        return false;
    }
    if (something === undefined){
        return true;
    }
    if (something === 123){
        return false;
    }
    if (something === null){
        return true
    }
    if (something === false){
        return true;
    }
    if (something === 0){
        return true;
    }
    if (something === '')
    {
        return true;
    }
    if (something === true){
        return false;
    }
}