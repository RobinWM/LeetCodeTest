var maxProfit = function (prices) {
    let map = new Map()
    prices.foreach((p, index) => {
        map.set(index, p)
    })
    const p = prices.sort((a, b) => a - b)

    
};