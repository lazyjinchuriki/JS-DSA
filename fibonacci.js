const x = 5;

// const fibonacci = (x) => {
//   const fib = [0, 1];

//   for (let i = 2; i <= x; i++) {
//     fib.push(fib[i - 1] + fib[i - 2]);
//   }
//   console.log(fib);
// };

const fibonacci = (x) => {
  if (x < 2) return x;

  return fibonacci(x - 1) + fibonacci(x - 2);
};

console.log(fibonacci(x));
