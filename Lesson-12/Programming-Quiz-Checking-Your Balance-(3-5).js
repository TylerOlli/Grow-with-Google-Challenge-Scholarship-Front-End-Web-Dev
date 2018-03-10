/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here

if (checkBalance === true) {
    if (isActive && balance>0 === true) {
        console.log("Your balance is $" + balance + ".");
    }
    else if (isActive === false){
        console.log("Your account is no longer active.")
    }
    
     else if (isActive === true){
        if (balance === 0) {
            console.log("Your account is empty.")
        }
        else {
            console.log("Your balance is negative. Please contact bank.")
        }
    }
    
}

else {
    console.log("Thank you. Have a nice day!");
    
}

//A man visits his bank manager and says, "How do I start a small business?" The manager replies, "Start a large one and wait six months."