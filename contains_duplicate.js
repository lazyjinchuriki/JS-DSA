let nums = [0, 4, 5, 0, 3, 6];

const containsDuplicate = (nums) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return true;
    } else {
      obj[nums[i]] = 1;
      console.log(obj);
    }
  }
  return false;
};

containsDuplicate(nums);
