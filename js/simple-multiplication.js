const simpleMultiplication = (number) => {
    return number % 2 == 0 ? number * 8 : number * 9;
}

// could have also put the ternary in parentheses and done the multiplication outside like below but both answers work well

// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }