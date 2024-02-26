// Coding Exercise 4: Frequency Counter / Multiple Pointers - areThereDuplicates (OPTIONAL!!!)

function areThereDuplicates(...arg) {
  const arr = [...arg];  
  let seen = {};
    
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return true;
      } else {
          seen[arr[i]] = true;
      }
  }
  return false;
}  

console.log(areThereDuplicates(1, 'test', {author: "Ray Bradbury", title: "Fahrenheit 451"}, 'test'));
