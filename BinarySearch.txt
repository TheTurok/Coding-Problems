let binary_search = function(a, key) {
  let low = 0;
  let high = a.length-1;
  let mid = Math.floor(a.length/2 - 1);

  while(low != mid && high !=mid){
    if(key === a[mid])
      return mid;
    if(key > a[mid]){
      low = mid;
      mid = Math.floor(low + (high - low) / 2);
    }
    else{
      high = mid;
      mid = Math.floor(low + (high - low) / 2);
    }
  }

  return -1;
};
