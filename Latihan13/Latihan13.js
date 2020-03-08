function targetTerdekat(arr) {
    // you can only write your code here!
    // arr = [' ', 'o', ' ', 'x', ' ', 'x', ' ', 'x']
    jarakdepan = 0
    jarakbelakang = 0
    xdepan = 0
    xbelakang = 0
    for (i=0; i<arr.length; i++){
        if(arr[i] == 'o'){

//cek kedepan
            for(j=i; j<arr.length; j++){
                if(arr[j] == ' '){
                    jarakdepan++
                    // console.log(jarak)
                } else if (arr[j] == 'x'){
                    jarakdepan++
                    xdepan++
                    // console.log(jarakdepan)
                    break
                    
                    // console.log(jarak)
                } 
                
            }

//cek belakang
            for(j=i; j>=0; j--){
                if(arr[j] == ' '){
                    jarakbelakang++
                    // console.log(jarak)
                } else if (arr[j] == 'x'){
                    jarakbelakang++
                    xbelakang++
                    // console.log(jarak)
                    // console.log(jarakbelakang)
                    break
                } 
            } 
        } 
    } 
    // console.log(jarakdepan)
    // console.log(jarakbelakang)
    // console.log(xdepan)
    // console.log(xbelakang)
    if (jarakdepan == 0 && xbelakang == 1){
        return jarakbelakang
    } else if(jarakbelakang == 0 && xdepan == 1){
        return jarakdepan
    } else if(xdepan == 0 && xbelakang == 0){
        return 0
    } else if(xdepan > xbelakang){
        return jarakdepan
    } else{
        return jarakbelakang
    }
}
  
//   // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' ',])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2