function validAnagram(str1, str2){
  if(str1.length !== str2.length){
      return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for(let char of str1){
      frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for(let char of str2){
      frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  
}

let str1 = 'testString1';
let str2 = 'testString2';

console.log(validAnagram(str1, str2));
