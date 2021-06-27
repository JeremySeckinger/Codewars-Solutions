// count from "1 sheep..." to `${num} sheep...` with all counts in between
//input will always be valid

//Naive

//Loop from 1 to num concatenating template literal to string
//so loop once = "1 sheep"
//loop twice = "1 sheep... + "2 sheep..."
//etc. all the way to "num sheep..."


//return string


var countSheep = function (num){
    //set variable as empty string to concatenate onto
    let sheepString = ''
    //loop through 1 to num concatenating 
    for(let i = 1; i <= num; i++){ 
        sheepString += `${i} sheep...`;
    }
    // return concatenated variable
    return sheepString;
}