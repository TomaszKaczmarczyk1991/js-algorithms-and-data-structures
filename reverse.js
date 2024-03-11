function reverse(str){
  let string = Array.from(str);
  // console.log(string) // ['a', 'w', 'e', 's', 'o', 'm', 'e']
  let result = [];
  let first = string[0];
  let last = string[string.length - 1];

  string.pop(last);
  result.push(last);
  
// remember that strings are immutable in js!
console.log(result)
}
  
console.log(reverse('awesome')); // 'emosewa'