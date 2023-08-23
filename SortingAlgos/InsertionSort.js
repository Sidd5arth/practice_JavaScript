function insertionSort(arr) {
    for(let i = 0; i < arr.length; i++){
      let j = i - 1;
      let curr = arr[i];
  
        while( j >= 0 && arr[j] > curr){
          arr[j + 1] = arr[j]
          j--;
        }
        arr[j + 1] = curr;
    }
    return arr;
  }