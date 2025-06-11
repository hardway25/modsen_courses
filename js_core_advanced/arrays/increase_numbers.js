let arr = [1, 2, 3, 4, 5]

function increaseArr (arr) {
    return arr.map(num => num * 1.1)
}

console.log(increaseArr(arr))