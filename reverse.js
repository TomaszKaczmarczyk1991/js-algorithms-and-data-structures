function reverse(str){
  let string = Array.from(str);
  let result = [];
  
  if(string.length !== 0) {
  let first = string[0];
  let last = string[string.length - 1];
  
  let temp = string.pop();
  result.push(temp);
  } else {
    return result.join("");
  }

  return result.join("") + reverse(string);
}
  
console.log(reverse('awesome')); // 'emosewa'