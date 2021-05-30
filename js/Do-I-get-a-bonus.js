function bonusTime(salary, bonus) {
    //params salary = integer
           //bonus = boolean
     // if bonus = true then salary * 10
     // else just salary
     //return total as string prefixed with regex "\u00A3" for JS
     return bonus === true ? "\u00A3" + `${salary * 10}` : "\u00A3" + `${salary}`;
}

//after reviewing solutions I could have skipped the "bonues == true" since it is already a boolean and just left "bonus ?"
//as well I could've used the £ sign in the template literal avoiding the regex

//some interesting solves:

// const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;

// function bonusTime(salary, bonus) {
//     return '£' + salary * (bonus ? 10 : 1);
// }