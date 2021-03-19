function abbrevName(name){
    let arr = name.split(" ");
    return arr.map((arr) => arr[0]).join('.').toUpperCase();  
}