function angkaPalindrome(num) {
    // you can only write your code here!  
    var tampung = num // angka awal num
    var temp = 0
    sama = 0

    // console.log(num)
    // console.log(tampung)
    // console.log(temp)
    // console.log(sama)

// pembalik angka
    while(sama<1){
        
        while(tampung>0){
            temp *= 10;
            temp += tampung%10;
            tampung = Math.floor(tampung/10)
        }

        if(num == temp){
            sama = 2
            return num
        } else {
            num++
            tampung = 0
            tampung = num
            temp = 0
        } 
    }
}

    // console.log(num)
    // console.log(tampung)
    // console.log(temp)
    // return ;
//   }
//   TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001


