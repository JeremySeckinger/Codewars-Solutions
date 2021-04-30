//Takes an array of integers and strings, converts strings to integers, and sums the array items

function sumMix(x){
    return x.map(Number).reduce((a,c) => a+c); //.map() converts every item to a number (Number), and then .reduce() sums the values
}

//After reviewing solution there are several clever answers
// I could have just done .reduce() with => acc + (+curr) 
// or +curr + acc

//or an eval( x.join("+")) which I think is particularly clever

//or a for loop with parseInt() like this:

// function sumMix(x){
//     let result = 0;
//     for (let n of x) {
//     result += parseInt(n);
//     }
//     return result;
// }