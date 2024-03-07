// Write a function called recursiveRange which accepts a number and adds up
// all the numbers from 0 to the number passed to the function.

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
  let initVal = num;
  if(num === 0) return initVal;
    return initVal += recursiveRange(num - 1);
}

console.log(recursiveRange(6));

// num === 7
// 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28