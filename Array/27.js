const removeElement = (nums, val) => {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            if (i != j) {
                nums[i] = nums[j];
            }
            i++;
        }
    }
    console.log(nums)
    return Number(i);
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2, 3, 3, 3]
removeElement(nums, 3)

i = 0 ; j = 0;  nums[j] != val  =>   [0, 1, 2, 2, 3, 0, 4, 2, 3, 3, 3]

i = 1 ; j = 1;  nums[j] == val  =>   [0, 1, 2, 2, 3, 0, 4, 2, 3, 3, 3]

i = 2 ; j = 2;  nums[j] != val  =>   [0, 1, 2, 2, 3, 0, 4, 2, 3, 3, 3]

i = 3 ; j = 3;  nums[j] != val  =>   [0, 1, 2, 2, 3, 0, 4, 2, 3, 3, 3]

i = 4 ; j = 4;  nums[j] == val  =>   [0, 1, 2, 2, 3, 0, 4, 2, 3, 3, 3]

i = 4 ; j = 5;  nums[j] != val  =>   [0, 1, 2, 2, 0, 0, 4, 2, 3, 3, 3]

i = 5 ; j = 6;  nums[j] != val  =>   [0, 1, 2, 2, 0, 4, 4, 2, 3, 3, 3]

i = 6 ; j = 7;  nums[j] != val  =>   [0, 1, 2, 2, 0, 4, 2, 2, 3, 3, 3]

i = 7 ; j = 8;  nums[j] != val  =>   [0, 1, 2, 2, 3, 0, 4, 2, 3, 3, 3]