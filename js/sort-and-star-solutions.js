function twoSort(s) {
    //sorts array of strings by ASCII value, then takes string at [0], splits it, and joins its letters with '***' in the middle
    return s.sort().slice(0,1).toString().split('').join('***');
}

//A more concise solution would have been to to identify the first sorted value by its index[0], instead of using .slice and .toString