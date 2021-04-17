function sumArray(array) {
    if ((Array.isArray(array) == true) && (array.length > 3)) {
    array.sort((a,b) => a - b);
    array.shift();
    array.pop();
    return array.reduce((a,c) => a + c);
    } else {
    return 0;
    };
};