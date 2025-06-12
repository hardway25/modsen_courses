const asyncFunc = (callback, ms) => {
    setTimeout(callback, ms);
}

console.log(1)
asyncFunc(() => console.log(2), 2000);
console.log(3)