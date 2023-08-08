const x = 12321;

const isPalindrome = (x) => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  console.log(x === +x.toString().split("").reverse().join(""));
};

isPalindrome(x);
