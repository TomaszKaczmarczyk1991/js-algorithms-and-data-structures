// Sliding window pattern

function maxSubarraySum(arr, num){
  if(num > arr.length) return null;
  
  let temp = 0;
  let max = 0;
  for(let i = 0; i < num; i++){
    max += arr[i];
  }
  temp = max;
  console.log("temp: ", temp);

  for(let i = num; i < arr.length; i++){
    temp = temp - arr[i - num] + arr[i];
    console.log("temp: ", temp);
    max = Math.max(max, temp);
    console.log("max: ", max);
  }
  return max;
}

console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5