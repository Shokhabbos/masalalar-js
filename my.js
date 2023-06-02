// const reverseSeq = n => {
//   let arr =[]
//   for(let i = n; i > 0; i--){
//      arr.push(i)
//   }
//   return arr
// };

// function findNextSquare(sq) {
//   // Return the next square if sq is a perfect square, -1 otherwise
//   if(sq**0.5 % 1 === 0){
//     return (sq**0.5 +1)**2
//   }
//   return -1;
// }

// function trimEl (str){
//   let newStr = []
//  for(let i = 0; i < str.length;i++){
//   str[i] !== " " ? newStr.push(str[i]) : str[i]
//  }
//  return newStr.join("")

// }
// function noSpace(x){return x.split(' ').join('')}

// function updateLight(current) {

//   //your code here!
//   switch (current){
//       case "green" :
//       return "yellow";
//       break;
//       case "yellow" :
//       return "red";
//       break;
//       case "red" :
//       return "green"
//       break
//   }

// }

// let text = 'The quick brown fox jumps over the lazy dog.'
// // function reverseText (item) {

// function myReverse(str) {
//   return str.split("").reverse().join("").split(" ").reverse().join(" ");
//  }

// //  str.split("").reverse().join("").split(" ").reverse().join(" ");
// // }
// // let resutl = reverseText()
// console.log(myReverse(text),"a");

// const a = [ism: 'Elbek', 'yosh']
// a['ism'] = 'Kamol'

// console.log(a);

// function isDivideBy(number, x, y) {
//   if (number % x === 0 && number % y === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isDivideBy(12, -1, 4));;

// function ("kitob!")   kitob
// function ("sham")   sham

// function removeLastEl (str) {
//   if(str.slice(-1)  === "!"){
//     return str.slice(0, -1)
//   }else{
//     return str
//   }
// }

// console.log(removeLastEl("Hello! World"));

// let arr = [1, 2, 3, 4, 5, 5, 1, 2];
// function x(arr) {
//   let a = 0;
//   let b = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       a += arr[i];
//     } else {
//       b += arr[i];
//     }
//   }
//   return [a, b];
// }

// console.log(x(arr));

// let str = "Robert Sharma   GOod"
// // str = Array(str)
// for(let i = 0; i <str.length; i++){
//   console.log(str[i], "saaall");
//   if(str[i] === " "){

//   }else{
//     console.log(2);
//   }

// }
// console.log(str);

// let someArr = [1, "Olma", "Anor","2",3, 4];
// function checkTypeOfNumber (arr){
//   let sum = 0
// for (let i = 0; i < arr.length; i++) {
//   if(typeof arr[i] == 'number'){
//     sum += arr[i]

//   }
// }
// return sum
// }

// console.log(checkTypeOfNumber([1,2,3]));

// function untillNumber(num){
// let x = 1
// for(let i = 1; i<= num; i++){
//   x*=i
// }
// return x
// }
// console.log(untillNumber(6));
10, 3;
0 - 10; //3,6,9
// function nimadir(n, x) {
//   let a  = []
//   for (let i = 1; i <= n; i++) {
//     console.log(i, n);
//     if ( i % x === 0) {
//        a.push(i)
//     }
//   }
//   return a;
// }

// console.log(nimadir(10, 3));
// let username = prompt("Ism kiriting:")
// let surname = prompt("Familyangizni kiriting:")
// console.log(`${username} ${surname}`)

let number = prompt("Son kiriting:")
let fruits = prompt("Meva nomini kiriting:")
// console.log(`${username} ${surname}`)
let str = ''
for(let i = 1;i<= number;i++){
  str +=fruits

}
alert(str);

