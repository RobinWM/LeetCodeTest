const plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] = digits[i] + 1;
        if (digits[i] == 10) {
            digits[i] = 0;
            console.log(digits[i])
            if (i == 0) {
                digits.unshift(1)
            }
            console.log(digits)
        } else {
            return digits;
        }
    }

    return digits
};

plusOne([9,9,9,9,9])