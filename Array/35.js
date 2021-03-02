const searchInsert = function (nums, target) {
    let j = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        if (target <= nums[i]) {
            return i;
        }
    }
};

const nums = [1, 3, 5];

searchInsert(nums, 4);