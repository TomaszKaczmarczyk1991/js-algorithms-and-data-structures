function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    
    if (!str1) return true;
    
    while (j < str2.length) {
      if (str2[j] === str1[i]){
        console.log('match! ->', 'i++');
        i++;
      }
      if (i === str1.length) return true;
      console.log("doesn't match! ->", 'j++')
      j++;
    }
    return false;
  }

console.log(isSubsequence('abc', 'acbd'));
//   i
// abc

//    j
// acbd

// now i understand it