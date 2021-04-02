function countPositivesSumNegatives(input) {
    let emptyArr = [];

    if(input === null) {
    return emptyArr;
    }
    else if(input.length === 0) {
    return emptyArr;
    } else {
    let countPositives = input.filter(x => x>0).length;
    let sumNegatives = input.filter(x => x<0).reduce((a, c) => a + c, 0);
    return [countPositives, sumNegatives];
    } ;
};
