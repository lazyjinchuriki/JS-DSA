const n = 19;

// const isHappy = (n) => {
//   let sum = 0;
//   let arr = [];
//   let num = n;
//   while (sum !== 1) {
//     sum = 0;
//     while (num > 0) {
//       sum += Math.pow(n % 10, 2);
//       num = Math.floor(num / 10);
//     }
//     if (arr.includes(sum)) {
//       return false;
//     }
//     arr.push(sum);
//     num = sum;
//   }
//   return true;
// };

//hash table
const isHappy = (n) => {
  let obj = {};
  while (n !== 1) {
    let sum = 0;
    while (n > 0) {
      sum += Math.pow(n % 10, 2); // 19 % 10 = 9, 9^2 = 81
      console.log("sum is " + sum);
      n = Math.floor(n / 10); // 19 / 10 = 1.9, 1
      console.log("number is " + n);
    }
    if (obj[sum]) {
      return false;
    }
    obj[sum] = 1;
    n = sum;
  }
  return true;
};

console.log(isHappy(n));
