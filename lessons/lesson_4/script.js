function progression(n) {
    if (n <= 0) throw new Error("the number should be positive");
    if (n == 1) return 1;
    return progression(n - 1) + n;
}
console.log(progression(10));


function fibonacci(n) {
    if (n <= 0) throw new Error("the number should be positive");
    if (n == 1) return 0;
    if (n == 2) return 1;
    sum = 0;
    sum1 = 0;
    sum2 = 1;
    for (i = 3; i <= n; i++) {
      sum = sum1 + sum2;
      sum1 = sum2;
      sum2 = sum;
    }
    return sum;
}
console.log(fibonacci(45));