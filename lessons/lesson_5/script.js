function binarySearch(arr, k, start, end) {
    if (end >= start) {
      let mid = Math.floor((start + end) / 2);
      if (k == arr[mid]) return mid;
      else if (k > arr[mid]) return binarySearch(arr, k, mid + 1, end);
      else return binarySearch(arr, k, start, mid);
    }
    return -1;
}
  
let array = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 5, 0, array.length - 1)); 

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    console.log(left);
    let right = arr.slice(mid, arr.lenght);
    console.log(right);
    return combine(mergeSort(left), mergeSort(right));
  }
  
  function combine(arr1, arr2) {
    let i = 0;
    let j = 0;
    let arr = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) arr.push(arr1[i++]);
      else arr.push(arr2[j++]);
    }
    while (i < arr1.length) {
      arr.push(arr1[i++]);
    }
    while (j < arr2.length) {
      arr.push(arr2[j++]);
    }
    return arr;
  }
  
  let arr = [4, 5, 2, 8, 1, 3, 7, 6];
  console.log(mergeSort(arr));
  
  [1, 2, 3, 4, 5, 6, 7, 8];