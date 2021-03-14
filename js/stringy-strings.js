function stringy(size) {
    if( size % 2 === 0){
      return "10".repeat(size/2);
      } else if(Math.abs(size % 2 === 1)){
        return "1" + "01".repeat(size/2);
      };    
}
