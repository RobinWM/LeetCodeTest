const twoSum = (nums, target) => {
    for (let i in nums) {
        let index = nums.findIndex(num => num === (target - nums[i]))
        if (index != -1 && index != i) {
            return [i, index]
        }
    }
};

twoSum([3, 3], 6);