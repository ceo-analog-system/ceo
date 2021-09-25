Array.prototype.myMap = function (fn) {
    let newArr = [];
    if (this.length === 0) {
        return newArr
    } else {
        for (let i = 0; i < this.length; i++) {
            newArr.push(fn(this[i]))
        }
        return newArr;
    }

}


let arr = [1, 2, 3, 4];

// arr.map(function an(item) {
//     return item;
// })

let a = myMap(function (item) {
    return 2 * item;
})

console.log(a);