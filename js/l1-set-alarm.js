function setAlarm(employed, vacation){
    return employed && !vacation ? true : false;
}

//could have just done:

// function setAlarm(employed, vacation){
//     return employed && !vacation;
// }

// const setAlarm = (employed, vacation) => employed && !vacation;