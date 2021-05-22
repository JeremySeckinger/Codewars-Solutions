function validateUsr(username) {
    res =  /^(?=[a-z_\d])[a-z_\d]{4,16}$/.test(username)  //regex here/.test(username) 
    return res
}