const removeDuplicates = (nums) => {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return Number(i) + 1;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

i = 0 ; j = 0;  nums[i] == nums[j]  =>   [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

i = 0 ; j = 1;  nums[i] == nums[j]  =>   [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

i = 0 ; j = 2;  nums[i] != nums[j]  =>   [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]

i = 1 ; j = 3;  nums[i] == nums[j]  =>   [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]

i = 1 ; j = 4;  nums[i] == nums[j]  =>   [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]

i = 1 ; j = 5;  nums[i] != nums[j]  =>   [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]

i = 2 ; j = 6;  nums[i] == nums[j]  =>   [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]

i = 2 ; j = 7;  nums[i] != nums[j]  =>   [0, 1, 2, 3, 1, 2, 2, 3, 3, 4]

i = 3 ; j = 8;  nums[i] != nums[j]  =>   [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]