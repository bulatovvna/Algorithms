let array = [1, 5, 4, 3, 7, 2]
let modArray = []
for (let i = 0; i < array.length; i++) {
    if(array[i] === 4) modArray.push(i)
}
console.log(modArray);

let arr = [1, 2, 3, 5, 10, 0, -2, 6, 4, 3]

function findNumbers(array, sum){
   for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if(array[i] + array[j] === sum){
                console.log(array[i], array[j]);
            }
        }
   }
}
findNumbers(arr, 10)