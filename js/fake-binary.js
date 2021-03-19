function fakeBin(x){
    return Array.from(x).map(x => (x >= 5 ? x = 1 : x = 0)).join("");
}