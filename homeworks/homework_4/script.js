const array1 = [100, 112, 256, 349, 770]
const array2 = [72, 86, 113, 119, 265, 445, 892]

const k = 7

function findKElem(array1, array2, k){
    let array = array1.concat(array2)
    array.sort((a,b) => a - b)
    return array[k - 1]
}
console.log(findKElem(array1,array2,k));