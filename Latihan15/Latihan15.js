function groupAnimals(animals) {
    // you can only write your code here!
    // animals = ['cacing', 'ayam', 'kuda', 'anoa', 'kancil']
    huruf = 'abcdefghijklmnopqrstuvwxyz'
    fix = []
    for(i=0; i<huruf.length; i++){
      temp = []
        for(j=0; j<animals.length; j++){
            if(animals[j][0] == huruf[i]){
                temp.push(animals[j])

            }
        } 
        if(temp.length != 0){
          fix.push(temp)
        }
    }
    // console.log(fix)
    return fix
}

   
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil'])); 
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]