function sumMix(x){
    var count = 0;
    const arrNum = x.map((i) => Number(i)); // convert everything to int
    for (var i = 0; i < arrNum.length; i++){ // loop though and add
        count = count + arrNum[i];
    }
    return count;
}

console.log(sumMix([9, 3, 7, 3])); // Return 22
console.log(sumMix([9, 3, '7', '3'])); // Return 22
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // Return 42
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])); // Return 41