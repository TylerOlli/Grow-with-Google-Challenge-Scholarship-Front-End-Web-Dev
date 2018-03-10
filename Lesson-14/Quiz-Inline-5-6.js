/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression


emotions("happy", function laugh(num) {
    string = "";
    for (i=0; i<num;i++) {
    string += "ha";
    }
    return string + "!";
});

/*
q. Why was Ember.js turning red? 
a. Because it was EMBERrassed for not remEMBERing its route home
*/