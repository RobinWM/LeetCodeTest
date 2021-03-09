const findContentChildren = function (g, s) {
    g = g.sort((a, b) => a - b )
    s = s.sort((a, b) => a - b )
    let i = 0;
    for (let j = 0; j < s.length; j++) {
        if (g[i] <= s[j]) {
            i++;
        }
    }

    return i;
};

findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])