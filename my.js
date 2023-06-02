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

function removeLastEl (str) {
  if(str.slice(-1)  === "!"){
    return str.slice(0, -1)
  }else{
    return str
  }
}

console.log(removeLastEl("Hello! World"));
