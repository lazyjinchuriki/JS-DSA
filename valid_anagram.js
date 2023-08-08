const s = "rat";
const t = "car";

// const isAnagram = (s, t) => {
//   if (s.length !== t.length) return false;

//   s = s.split("").sort().join("");
//   t = t.split("").sort().join("");
//   return s === t;
// };

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

console.log(isAnagram(s, t));
