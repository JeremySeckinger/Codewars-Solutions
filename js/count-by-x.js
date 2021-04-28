function countBy(x, n) {
    //parameters: x = starting number to count by multiple n
    //returns: array of x out to the nth multiple
    var z = [];
    for(let i = 0; i < n ; i++){ //loops through array starting from 0 to n-1 
        z.push(x*(i+1)) //adds one item starting with x multiplied by it's +1 position in the array
    }
    return z;
}

//To add to this solution after reviewing the codewars solutions, I could have let i = 1 and used 1 <= n and then just done z.push( x * i )


//As well, another interesting technique would be to use Array.from such as: const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)