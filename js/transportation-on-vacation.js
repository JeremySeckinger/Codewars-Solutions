function rentalCarCost(d) {
    if(d >= 3){
    return d >= 7 ? 40*d - 50 : 40*d - 20;
    } else {return 40*d}
}