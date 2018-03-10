/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

var facebookProfile = {
    name: "Tyler",
    friends: 100,
    messages: ['Hello World','Today is such a great day','I have so many amazing friends'],
    
    postMessage(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage(index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend() {
        facebookProfile.friends += 1;
    },
    removeFriend() {
        facebookProfile.friends = facebookProfile.friends -1;
    }
    
};

/* 
Q: Why is Facebook like a refrigerator? 
A: Because every few minutes you keep opening and closing it to see if there's anything good in it! 
*/
