function bonusTime(salary, bonus) {
    //params salary = integer
           //bonus = boolean
     // if bonus = true then salary * 10
     // else just salary
     //return total as string prefixed with regex "\u00A3" for JS
     return bonus === true ? "\u00A3" + `${salary * 10}` : "\u00A3" + `${salary}`;
}