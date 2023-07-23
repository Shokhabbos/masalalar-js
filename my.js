function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  
      let leng= {};

    for(item in array){
        // leng.push(item.length);
        leng[array[item].length] = array[item];
    }
    return Object.values(leng);
};