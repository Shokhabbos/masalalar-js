const reverseSeq = n => {
  let arr =[]
  for(let i = n; i > 0; i--){
     arr.push(i)
  }
  return arr
};

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  if(sq**0.5 % 1 === 0){
    return (sq**0.5 +1)**2
  }
  return -1;
}

function trimEl (str){
  let newStr = []
 for(let i = 0; i < str.length;i++){
  str[i] !== " " ? newStr.push(str[i]) : str[i]
 }
 return newStr.joi
}


function noSpace(x){return x.split(' ').join('')}

 function updateLight(curren){
   //your code here!
   switch (current){
       case "green" :
       return "yellow";
       break;
       case "yellow" :
       return "red";
       break;
       case "red" :
       return "green"
       break

 }}

// // let text = 'The quick brown fox jumps over the lazy dog.'

function myReverse(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
 }



function isDivideBy(number, x, y) {
  if (number % x === 0 && number % y === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isDivideBy(12, -1, 4));;

// // function ("kitob!")   kitob
// // function ("sham")   sham

function removeLastEl (str) {
  if(str.slice(-1)  === "!"){
    return str.slice(0, -1)
  }else{
    return str
  }
}

console.log(removeLastEl("Hello! World"));

let arr = [1, 2, 3, 4, 5, 5, 1, 2];
function x(arr) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      a += arr[i];
    } else {
      b += arr[i];
    }
  }
  return [a, b];
}

console.log(x(arr));

let str = "Robert Sharma   GOod"
// str = Array(str)
for(let i = 0; i <str.length; i++){
  console.log(str[i], "saaall");
  if(str[i] === " "){

  }else{
    console.log(2);
  }

}
console.log(str);

let someArr = [1, "Olma", "Anor","2",3, 4];
function checkTypeOfNumber (arr){
  let sum = 0
for (let i = 0; i < arr.length; i++) {
  if(typeof arr[i] == 'number'){
    sum += arr[i]

  }
}
return sum
}

console.log(checkTypeOfNumber([1,2,3]));

// // // function untillNumber(num){
// // // let x = 1
// // // for(let i = 1; i<= num; i++){
// // //   x*=i
// // // }
// // // return x
// // // }
// // // console.log(untillNumber(6));
// // 10, 3;
// // 0 - 10; //3,6,9
// // // function nimadir(n, x) {
// // //   let a  = []
// // //   for (let i = 1; i <= n; i++) {
// // //     console.log(i, n);
// // //     if ( i % x === 0) {
// // //        a.push(i)
// // //     }
// // //   }
// // //   return a;
// // // }

// // // console.log(nimadir(10, 3));
// // // let username = prompt("Ism kiriting:")
// // // let surname = prompt("Familyangizni kiriting:")
// // // console.log(`${username} ${surname}`)

// // // let number = prompt("Son kiriting:")
// // // let fruits = prompt("Meva nomini kiriting:")
// // // // console.log(`${username} ${surname}`)
// // // let str = ''
// // // for(let i = 1;i<= number;i++){
// // //   str +=fruits

// // // }
// // // alert(str);

// // let arr = ["behi", "anor", "shaftoli"];
// // let str = "salom qalesan "
// // console.log(str.split(" "));

// // // function reverseWords(word) {
// // //   let str = "";
// // //   // let arr = word.split(" ");
// // //   for(let i = 0 ; i < arr.length; i++){
// // //       for(let j = arr[i].length-1; j >= 0; j--){
// // //           console.log(str += arr[i][j]);;
// // //       }
// // //       str += " ";
// // //   }

// // //    return str;
// // // }

// // // console.log(reverseWords("The quick brown fox jumps"));

// // // // function reverseStr(number) {

// // // //   let str = ""
// // // //   for (let i = number.length -1; i >= 0; i--){
// // // //     str = str + number[i]
// // // //   }
// // // //     return str
// // // //   }
// // // // console.log(reverseStr(6));

// // // let arr2 = [["salom", 2, 3, "xayr",5, 6, null], [2], 3, 5, "Hello"]
// // // // let newArr = []
// // // // for(let i = 0; i< arr.length;i++){
// // // //   console.log(arr[i], i);
// // // //   if(i % 2  == 0){
// // // //     newArr.push(arr[i])

// // // //   }
// // // // }
// // // function removeEveryOther(arr){
// // // let newArr = []
// // //   for(let i = 0; i< arr.length;i++){
// // //     if(i % 2  == 0){
// // //       newArr.push(arr[i])

// // //     }
// // //   }
// // //   return newArr

// // // }

// // // console.log(removeEveryOther(arr2));

// // // function isSquare (num){
// // //   if(Math.sqrt(num) % 1 !== 0){
// // //     return false
// // //   }else{
// // //     return true
// // //   }
// // // }
// // // // let num = 25

// // // console.log(isSquare(-25) );

// // // let str = "auieog ghui i o e"
// // function isUnli(str){
// //   let sum = 0
// //   for(let i = 0; i< str.length;i++){
// //     if(str[i] === "i" || str[i] === "a" ||str[i] === "u" ||str[i] === "o" ||str[i] === "e" ){
// //       sum++
// //     }

// //   }
// //   return sum

// // }

// // // console.log(isUnli("Hello Najott"));
// // function isNextsquare (n) {
// //   let z;
// //   if (Math.sqrt(n)%1==0) {
// //     z= (Math.pow(n,1/2)+1)**2;

// //   }
// //   return z;
// // }
// // console.log(isNextsquare(25));

// // let str = "Salom Dunyo qalesan";
// // function reverseStrFun( str){
// //   let strToArray = str.split(" ");
// // let reverseStr = '';
// // for (let i = 0; i < strToArray.length; i++) {
// //   // console.log(strToArray[i]);
// //   for (let j = strToArray[i].length - 1; j >= 0; j--) {
// //     reverseStr += strToArray[i][j];
// //     // console.log(strToArray[i][j]);
// //   }
// //   reverseStr+= ' '

// //   // console.log(reverseStr);
// // }
// // let a = (reverseStr.split(' ').slice(0,-1))
// // return a
// // }

// // console.log(reverseStrFun("Nihoyatda gozal"));

// function findFactors(n) {
//   let factors = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       factors.push(i);
//     }
//   }
//   return factors;
// }

// console.log(findFactors(12));

// function theBiggestNumber(a){
//   return Number(a.toString().split('').sort().reverse().join(''))
// }

// }

// //     for (let i = 0; i < firstObj.length; i++) {
// //       const [key1, val1] = firstObj[i];
// //       const [key2, val2] = secondObj.find(([key]) => key === key1) || [];
// //       if (val1 !== val2) {
// //         return false;
// //       }
// //     }

// //     return true;
// //   };

const isEqualObjs = (obj1, obj2) => {
    const firstObj = Object.entries(obj1);
    const secondObj = Object.entries(obj2);
  
    if (firstObj.length !== secondObj.length) {
      return false;
    }
  
    for (let i = 0; i < firstObj.length; i++) {
      const [key1, val1] = firstObj[i];
      const [key2, val2] = secondObj.find(([key]) => key === key1) || [];
      if (val1 !== val2) {
        return false;
      }
    }
  
    return true;
  }; 

// const food = ['🍕', '🍫', '🥑', '🍔'];
// const info = { favoriteFood: food[0] };

// info.favoriteFood = '🍝';

// console.log(info);
// console.log(food);