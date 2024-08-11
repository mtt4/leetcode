var removeElement = function(nums, val) {
  let k = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[++k] = nums[i];
    }
  }

  return k + 1;
}