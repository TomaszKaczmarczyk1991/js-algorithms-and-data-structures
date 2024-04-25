function binarySearch(arr, val){
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let midPointer = Math.floor((leftPointer + rightPointer) / 2);
    
    while(arr[midPointer] !== val && leftPointer <= rightPointer){
        if(val < arr[midPointer]) {
          rightPointer = midPointer - 1;
        } else {
          leftPointer = midPointer + 1;
        }
        midPointer = Math.floor((leftPointer + rightPointer) / 2);
      }
      if(val === arr[midPointer]){
        return midPointer;
      } else {
        return -1;
      }
  }

  console.log(binarySearch([1,2,3,4],6)) // 4