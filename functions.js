// console.log("sanni");

// const twoprams1 = (x) => {
//   if (x === undefined) {
//     console.log("please enter a value");
//   } else if (isNaN(x)) {
//     console.log("please enter a number");
//   } else {
//     console.log(x * 2);
//   }
// };
// twoprams1();

// let num = 3;

// console.log(isNaN(num));

// function name1 () {
//     let el = []
//     for (let x = 0; x < arguments.length; x++){
//         el.push(arguments[x])
//     }

//    return el.reduce((a, b) => {
//         return a + b
//     })
// }
// console.log(name1(1, 3));

// function add () {
//     let num = 0;
//     for (let i = 0; i < arguments.length; i+=1) {
//         num += arguments[i];
//     }

//     console.log(num);
// }

// add(1,2)

// let rev = 0;
// let num = 123;
// let lastDigit;

// while(num != 0){
// 	lastDigit = num % 10;
//   rev = rev * 10 + lastDigit;
//   num = Math.floor(num/10);
// }

// console.log("Reverse number : ", rev);

// first
//  function reverse1 (x) {
//     let rev = 0;
//      let lastDigit;
//      while(x != 0){
//          lastDigit = x % 10;
//          rev = rev * 10 + lastDigit;
//          x = Math.floor(x / 10);
//      }
//      return rev
//  }

//  console.log(reverse1(20));

// function reverse (x){
//     rev = Number(String(x).split("").reverse().join(""))
//     console.log(rev);
// }

// reverse(1234)

// // second
// function reverse1 () {
//    let el =[]
//    for(let i = 0; i < arguments.length; i++) {
//     el.push(arguments[i]);
//    }

//    return parseInt(el.reverse().join(""))
//  }

// console.log(reverse1(1,3,4));

// function height (x) {
//     if (x < 70) {
//         console.log("you are short");
//     } else {
//         console.log("you are tall");
//     }
// }
// height(60)

// function check () {
//     max = -Infinity
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }

// console.log(check(1,2,4));

// function reverse (x) {
//     rev = Number(String(x).split("").reverse().join(""))
//     if (rev) {
//         console.log(rev);
//     } else {
//         console.log("enter a number");
//     }
// }
// reverse()

// function check1 () {
//      infinity = Math.max()
//         for (let i = 0; i < arguments.length; i++) {
//             if (arguments[i] > infinity) {
//                 infinity = arguments[i];
//             }
//         }
//         console.log(infinity);
// }
// check1(14,22)

// const readline = require("readline").Interface({
//     input: process.stdin,
//     output:  process.stdout,
// })

// readline.question("hey...what's on your mind", (any) => {
//     console.log(`hmmm...really...so ${any} is what on your mind`,);
// })

// const interaction = require("readline").Interface({
//     input: process.stdin,
//     output: process.stdout
// })

// interaction.question("how far", (ans) => {
//     console.log(ans, "hmm...okay");
// })

// const prompt = require("prompt-sync")()

// let name = prompt("what's your name ")
// console.log(`what a beauitful ${name}`);

// function cal () {
//     let input1 = Number(prompt("enter your first number: "))
//     let input2 = Number(prompt("enter your second number: "))
//     console.log(input1 + input2);
// }
// cal()

const items = [
  { name: "sanni", price: 100 },
  { name: "bola", price: 10 },
  { name: "anu", price: 40 },
  { name: "tola", price: 20 },
  { name: "lala", price: 33 },
  { name: "momo", price: 11 },
  { name: "mimi", price: 22 },
];

// let highfun = items.map((items) => {
//     return items.price;
// })

// // console.log(highfun);

// // items.forEach((item) => {
// //   console.log(item.price)
// // });

// let Some = items.reduce((num, item) => {
//     return item.price + num
// }, 0)

// console.log(Some);

// let arr = [1, 3, 4, 5, 6]

// // console.log(arr.includes(9));

// if(arr.includes(5) === true) {
//     console.log("avaliable");
// } else {
//     console.log("not here");
// }


// const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// console.log(fruits1.copyWithin(0, 1, 5));


// // asss
// const jogtimer = () => {
//   const prompt = require("prompt-sync")();
//   let name = prompt("Good day, please input your name ");
//   let question = prompt("I trust you are having a great day ");

//   if (question === "yes" || question === "Yes") {
//     console.log(`Oh great! ${name}`);
//   } else if (question == "no") {
//     console.log(`Sorry about that ${name}`);
//     console.log(`Sorry about that ${name}`);
//   } 

//   let question1 = parseInt(prompt("will you like to go for a jog today? "));

//   if (question1 === "yes") {
//     console.log("very well then");
//   } else if (question1 === "no") {
//     console.log(`Have a nice day ${name}`);
//   }

//   let question2 = parseInt(
//     prompt(
//       `${name}, how many minutes will you  like to jog for today?(minutes) `
//     )
//   );
//   console.log(
//     `that's quite interesting ${name}, i'll be happy to help track your activity today `
//   );
//   console.log(
//     `Great job ${name}, your first session has elapsed. You jogged for ${question2} minutes. That was awesome `
//   );

//   let secondJog = prompt(`${name} Will you like to continue jogging? `);
//   if (secondJog === "yes") {
//     console.log("great! then let's proceed");
//   } else if (secondJog === "no") {
//     console.log(
//       `You jogged for a total of ${question2} minutes today. Have a nice day! `
//     );
//   }

//   let question3 = parseInt(
//     prompt(
//       "how many minutes will you like to jog in this second session?(minutes) "
//     )
//   );
//   console.log(`Good job!${name}, your second session has elapsed `);

//   let thirdJog = prompt(`would you still like to jog for the final session? `);
//   if (thirdJog === "yes") {
//     prompt("Alright, let's do this!");
//   } else if (question3 === "no") {
//     console.log(
//       `${name}, you did great today. You Jogged for a total of ${
//         question2 + question3
//       } minutes. `
//     );
//   }

//   let question4 = parseInt(
//     prompt("how many minutes will you like to jog in this final session? ")
//   );
//   console.log(
//     `Splendid! you are very fit to run your routine schedule today! you jogged for a total of ${
//       question2 + question3 + question4
//     } minutes today! Have a nice day ${name}`
//   );
// }


// jogtimer()


