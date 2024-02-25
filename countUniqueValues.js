// Coding Exercise 2: Multiple Pointers - countUniqueValues

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let counter = 1;
      
  for(let i = 0; i < arr.length-1; i++) {
      if(arr[i] !== arr[i+1]){
      counter++;
      }
    }
    return counter;
  }
  
  countUniqueValues([1,1,1,1,1,1,1,1,3]);  