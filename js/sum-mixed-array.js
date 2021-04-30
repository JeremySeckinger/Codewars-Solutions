//Takes an array of integers and strings, converts strings to integers, and sums the array items

function sumMix(x){
    return x.map(Number).reduce((a,c) => a+c); //.map() converts every item to a number (Number), and then .reduce() sums the values
}

