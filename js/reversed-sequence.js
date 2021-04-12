const reverseSeq = n => {
    return (Array.from(Array(n).keys())).map(x => ++x).reverse();
};