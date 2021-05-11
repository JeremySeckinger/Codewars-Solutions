function removeEveryOther(arr){
    return arr.filter((x, y) => {
        return y % 2 == 0;
    });
}