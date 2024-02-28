function averagePair(arr, average){
    let first = 0;
    let last = arr.length - 1;
    
  while(first < last){
    const avg = (arr[first] + arr[last]) / 2;
    if(average === avg) return true;
    
    return true;
  }
  return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],8));

//  i
// [1,3,3,5,6,7,10,12,19],8
//    j