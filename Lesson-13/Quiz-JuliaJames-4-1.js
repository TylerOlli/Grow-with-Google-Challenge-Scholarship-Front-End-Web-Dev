/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 20) {
    // check divisibility
    // print Julia, James, or JuliaJames
    if ((x % 3 === 0) && (x % 5 === 0)){
        console.log("JuliaJames");
    }
    else if (x % 3 === 0) {
        console.log("Julia");
    }
    else if (x % 5 === 0) {
        console.log("James");
    }
    else {
        console.log(x);
    }
    // increment x
    x++;
}

/* A programmer started to cuss
Because getting to sleep was a fuss
As he lay there in bed
Looping ’round in his head
was: while(!asleep()) sheep++; */
