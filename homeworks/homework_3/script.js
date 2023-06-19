// function hanoi(n, A, C, B){
//     if(n <= 0) throw new Error('the number should be positive')
//     if(n == 1) console.log(A + C);
//     else {
//         hanoi(n - 1, A, B, C);
//         console.log(A + C);
//         hanoi(n - 1, B, C, A);
//     }
// }
// hanoi(3,"A", "C", "B")

// function Hanoi(n) {
//     let source = "A";
//     let target = "C";
//     let auxiliary = "B";
  
//     let moves = [];
  
//     moves.push({ n: n, source: source, target: target, auxiliary: auxiliary });
  
//     while (moves.length > 0) {
//       let move = moves.pop();
//       if (move.n == 1) {
//         console.log(move.source + move.target);
//       } else {
//         moves.push({
//           n: move.n - 1,
//           source: move.auxiliary,
//           target: move.target,
//           auxiliary: move.source,
//         });
//         moves.push({
//           n: 1,
//           source: move.source,
//           target: move.target,
//           auxiliary: move.auxiliary,
//         });
//         moves.push({
//           n: move.n - 1,
//           source: move.source,
//           target: move.auxiliary,
//           auxiliary: move.target,
//         });
//       }
//     }
// }
  
// Hanoi(3);

function binary(arr, target, start, end) {
    let mid = Math.floor((start + end) / 2);
  
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) return binary(arr, target, start, mid - 1);
    else return binary(arr, target, mid + 1, end);
}
  
let array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let target = 5;
console.log(binary(array, 90, 0, array.length - 1));