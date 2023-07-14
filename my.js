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
  