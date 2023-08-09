const s = "LVIII";

const romanToInt = (s) => {
  if (
    (1 <= s.length <= 15 && s.includes("I")) ||
    s.includes("V") ||
    s.includes("X") ||
    s.includes("L") ||
    s.includes("C") ||
    s.includes("D") ||
    s.includes("M")
  ) {
    let res = 0;
    const obj = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    for (let i = 0; i < s.length; i++) {
      if (obj[s[i]] < obj[s[i + 1]]) {
        res -= obj[s[i]];
      } else {
        res += obj[s[i]];
      }
    }
    return res;
  }
};

console.log(romanToInt(s));
