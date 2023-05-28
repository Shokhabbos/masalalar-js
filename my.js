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
 return newStr.join("")
 
}
function noSpace(x){return x.split(' ').join('')}

function updateLight(current) {
  
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
  }

}
let resutl = noSpace("adb bd bd d")
console.log(resutl,"a");