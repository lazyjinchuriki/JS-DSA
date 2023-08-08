const nums = [2, 7, 11, 15];
const target = 13;

// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

const twoSum = (nums, target) => {
  if (nums.length < 2) return null;

  var obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] >= 0) {
      return [obj[nums[i]], i];
    }
    obj[target - nums[i]] = i;
  }

  return null;
};
console.log(twoSum(nums, target));
