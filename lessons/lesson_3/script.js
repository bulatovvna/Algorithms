// function progression(n){
//     if(n <= 0) throw new Error('the number should be positive')
//     let sum = 0
//     for (let i = 0; i <= n; i++) {
//         sum = sum + i
//     }
//     return sum
// }
// console.log(progression(5)); 
// console.log(progression(-5)); 

// Second one
// function progression(n){
//     if(n <= 0) throw new Error('the number should be positive')
//     if(n == 1) return 1
    
//     return progression(n - 1) + n
// }
// console.log(progression(5)); 

// fibonachi
// 0,1,(0+1),(1+1),(1+2),(2+3),...
// function progression(n) {
//     if (n <= 0) throw new Error("the number should be positive");
//     if (n == 1) return 0;
//     if (n == 2) return 1;
//     let sum1 = 0;
//     let sum2 = 1;
//     let sum = 0;
//     for (let i = 3; i <= n; i++) {
//       sum = sum1 + sum2;
//       sum1 = sum2;
//       sum2 = sum;
//     }
//     return sum;
//   }
  
// console.log(progression(6));

// Second one
// function progression(n){
//     if (n <= 0) throw new Exception("the number should be positive");
//     if (n == 1) return 0;
//     if (n == 2) return 1;

//     return progression(n - 1) + progression(n - 2);
// }
// console.log(progression(6));

//factorial Iterative
function factorialIterative(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
      result *= i;
    }

    return result;
}

//factorial Recursive
function factorialRecursive(n) {
    if (n <= 0) throw new Exception("the number should be positive");
    if(n === 1) return 1;
    
    return factorialRecursive(n - 1) * n;
}

console.log(factorialIterative(5));
console.log(factorialRecursive(5));