// COMMENT SECTION:
// end for today, i made a big mess here.
// it's late and i am exhausted by my 1 year old son ;)
// 

function isSubsequence(string1, string2) {
  let str1 = string1.split('');
  let str2 = string2.split('');
  
  let i = 0;
  let j = 0;
 
  
  while(str2.length === 0){
    
    if(str1.length === 0) return true;
    else if(str2.length === 0) return false;

    else if(str1[i] !== str2[j]) j++;
    else{
        console.log(str1);
        str1.splice(0,1);
        console.log(j)
        j++;
    }
  }
}



console.log(isSubsequence('abc', 'abc'));