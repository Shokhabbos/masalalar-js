const reverseSeq = n => {
  let arr =[]
  for(let i = n; i > 0; i--){
     console.log(arr.push(i), i, n);
  }
  return arr
};
console.log(reverseSeq(5));
