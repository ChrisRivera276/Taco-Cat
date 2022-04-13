// Step One - controller accept request
function getMessage() {
    let msg = document.getElementById("txtmessage").value;

    // validate if the msg values are equal
    if (msg != '') {
        msg = msg.toLowerCase();
        let messageFirst = firstMessage(msg)
        let revMessage = reverseMessage(msg)
        if (messageFirst == revMessage) {
            displayMessage("THIS IS A PALINDROME!");

        } else {
            displayMessage("This is not a palindrome...")

        }

    } else {
        alert("You must enter a word")
    }
}

function firstMessage(msg) {
    let messageFirst = "";
    messageFirst = msg;
    return messageFirst;
}


function reverseMessage(msg) {
    let revMessage = "";

    for (let index = msg.length - 1; index >= 0; index--) {
        let char = msg[index];
        revMessage += char;
    }

    return revMessage;
}






// Final Step - view
function displayMessage(message) {

    //fist get ol element from page
    element = document.getElementById("results");
    element.innerHTML = message;
}







// // Step One - controller accept request
// function getMessage() {
//     let msg = document.getElementById("txtmessage").value;

//     // validate if the msg not equal to empty string
//     if (msg != '') {
//         msg = msg.toLowerCase();
//         let messageFirst = firstMessage(msg);
//         let revMessage = reverseMessageB(msg);

//         displayMessage(messageFirst + revMessage);

//     } else {
//         alert("You must enter a string")
//     }
// }

// function firstMessage(msg) {
//     let messageFirst = "";
//     messageFirst = msg;
//     return messageFirst;
// }



// function reverseMessageB(msg) {

//     let revMessage = "";
//     revMessage = msg.split("").reverse().join("");

//     return revMessage;
// }





// // Final Step - view
// function displayMessage(message) {

//     //fist get ol element from page
//     element = document.getElementById("results");
//     element.innerHTML = message;
// }