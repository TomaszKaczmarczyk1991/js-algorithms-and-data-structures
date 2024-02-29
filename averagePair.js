function averagePair(arr, target){
    let first = 0;
    let last = arr.length - 1;
    
  while(first < last){
    const avg = (arr[first] + arr[last]) / 2;
    
    if(target === avg) return true;
    else if(avg < target) first++;
    else last--;
  }
  return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],8));

// ok, i admit - that's not my code.
// i was struggling to come up with other solution than nested loops.
// but i analyzed this one and understood how it works.