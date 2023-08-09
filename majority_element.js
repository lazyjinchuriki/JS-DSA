const nums = [2, 2, 1, 1, 1, 2, 2];

const majorityElement = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
      if (obj[nums[i]] > nums.length / 2) {
        return nums[i];
      }
    } else {
      obj[nums[i]] = 1;
    }
  }
};

console.log(majorityElement(nums));
