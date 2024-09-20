// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
//}

//const gifts = ["teddy bear", "drone", "doll"]

//function wrapGifts(gifts) {
//    for (let i = 0; i < gifts.length; i++) {
//        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        //debugger;
//    }

//    return gifts;
//}

//console.log(wrapGifts(gifts));



function writeCards(names, event) {
    let messages = [];
    for (i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
        
    }
  return messages;
}
const weddingMessages = writeCards(["Njoroge", "Akinyi", "Muriithi"], "wedding")
console.log(weddingMessages)

function countDown(number) {
    // While the number is greater than or equal to 0
    while (number >= 0) {
        // Log the current number
        console.log(number);
        // Decrement the number
        number--;
    }
}

//countDown(10);