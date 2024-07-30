console.log("Hello");

/*  scope of the variables:
    1. Global scope
    any variable declared using var keyword or let keyword outside the functions
    any variable declared WITHOUT var or let or const keyword

    2. function scope(local scope)
    any function declared using var keyword inside the function 

    3. Block Scope
    any variable declared using let keyword inside the block
*/

var g = 10;
console.log("(Outside the function)g="+ g);

function todo(){
    console.log("(Inside the function)g="+g);
    let a = 5;
    console.log("(Inside the function)a="+a);
    {
        var b = 22;
        console.log("(Inside the block)b="+b);
        let c = 100;
        console.log("(Inside the block)c="+c);
    }
    console.log("(Outside the block)b="+b);
    // console.log("(Outside the block)c="+c);
    d = 150;
}

todo()
console.log("(Outside the function)d="+d)
// console.log("(Outside the function)a="+a)