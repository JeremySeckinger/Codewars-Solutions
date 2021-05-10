function howMuchILoveYou(nbPetals) {
    let arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    if(nbPetals % 6 === 1){
      return arr[0]
    } else if(nbPetals % 6 === 2){
      return arr[1]
    } else if(nbPetals % 6 === 3){
      return arr[2]
    } else if(nbPetals % 6 === 4){
      return arr[3]
    } else if(nbPetals % 6 === 5){
      return arr[4]
    } else if(nbPetals % 6 === 0){
      return arr[5]
    }
}

//my first thought on this was to create an array of the defined returns, and use an algorithm to calculate the parameters return
//applying a modulus for reach individual parameter controls for numbers past the 6 defined returns, but my method was brute force
//this method above works, but it is NOT pretty and I knew there was an easier way to do this but my head doesnt want to think too deeply right now
//analyzing other solutions looks like (n-1) % 6 was the solution I was looking for to tidy this up....so plainly obvious BIG OOF

//I am glad I figured to make an array of the returns and use modulus to get the remainder to translate the return though--its something I guess