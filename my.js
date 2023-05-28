const reverseSeq = n => {
  let arr =[]
  for(let i = n; i > 0; i--){
     console.log(arr.push(i), i, n);
  }
  return arr
};
console.log(reverseSeq(5));


function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  if(sq**0.5 % 1 === 0){
    return (sq**0.5 +1)**2
  }
  return -1;
}