// bubblesort

// let list = [4,1,3,2,5]

// function bubblesort(array){
//     for (let i = 0; i < array.length-1; i++) {
//         let changed = false
//         for (let j = 0; j < array.length-1 - i; j++) {
//             if(array[j] > array[j + 1]){
//                 let temp = array[j]
//                 array[j] = array[j + 1]
//                 array[j + 1] = temp
//                 changed = true
//             }
//             if(!changed) break;
//         }
//         return array
//     }
// }

// function bubblesort2(array){
//     for (let i = 0; i < array.length-1; i++) {
//         let changed = false
//         for (let j = array.length-2; j >= i; j--) {
//             if(array[j] > array[j + 1]){
//                 let temp = array[j]
//                 array[j] = array[j + 1]
//                 array[j + 1] = temp
//                 changed = true
//             }
//             if(!changed) break;
//         }
//         return array
//     }
//     }
    
// console.log(bubblesort(list));
// console.log('--------------------');
// console.log(bubblesort2(list));


// ----------------------------------------

function insertionSort(array) {
    for (let i = 2; i < array.length; i++) {
      let key = array[i];
  
      while (i >= 1 && array[i - 1] > key) {
        array[i] = array[i - 1];
        i = i - 1;
      }
      array[i] = key;
    }
    return array;
  }
  
  let array = [5, 4, 3, 2, 1];
  
  console.log(insertionSort(array));




