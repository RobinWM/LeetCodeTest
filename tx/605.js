const canPlaceFlowers = (flowerbed, n) => {
    for (let i = 0; i < flowerbed.length; i++) {
        if (n <= 0) {
            return true;
        }
        if (flowerbed[i] === 1) {
            continue;
        }
        if (i > 0 && flowerbed[i - 1] == 1) {
            continue;
        }
        if (flowerbed[i + 1] == 1) {
            continue;
        }

        flowerbed[i] = 1;
        n--
    }

    return n <= 0;
};

canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)