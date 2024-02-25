// Coding Exercise 3: Frequency Counter - sameFrequency

function sameFrequency(int1, int2){
  const num1 = int1.toString();
  const num2 = int2.toString();
  
  if(num1.length !== num2.length) return false;
  
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for(let digit of num1){
    frequencyCounter1[digit] = (frequencyCounter1[digit] || 0) + 1;
  }
  for(let digit of num2){
    frequencyCounter2[digit] = (frequencyCounter2[digit] || 0) + 1;
  }

  
}


console.log(sameFrequency(1238, 1224));