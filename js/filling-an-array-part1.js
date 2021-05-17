function arr(n) {
    const arr = []
    for(let i = 0; i < n; i++){
    arr.push(i);
    }
    return arr;
}

//A more concise way to solve this problem wouldve been using Array.from()

// const arr = n => Array.from({length: n}, (_, i) => i);

//or using Array().keys()

//arr = n => n ? [...Array(n).keys()] : [];