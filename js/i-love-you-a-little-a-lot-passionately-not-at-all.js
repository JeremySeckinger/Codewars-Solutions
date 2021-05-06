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