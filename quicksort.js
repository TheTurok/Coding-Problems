let quick_sort = function(a) {
  return quickSort(a, 0, a.length -1);
};

let quickSort = function(a, low, high){
  if(low < high){
    let p = partition(a, low, high);

    quickSort(a, low, p - 1);
    quickSort(a, p + 1, high);
  }
}

let partition = function(a, low, high){
  let pivot = a[high];

  let i = (low - 1);

  for(let j = low; j <= high -1; j++){
    if(a[j] <= pivot)
    {
       i++;
       let tmp = a[j];
       a[j] = a[i];
       a[i] = tmp;
    }
  }

  let tmp = a[i+1];
  a[i + 1] = a[high]
  a[high] = tmp;

  return i + 1;
}
