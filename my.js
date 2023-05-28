function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  if(sq**0.5 % 1 === 0){
    return (sq**0.5 +1)**2
  }
  return -1;
}