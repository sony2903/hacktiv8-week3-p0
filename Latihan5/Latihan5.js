function palindrome(kata) {
    // you can only write your code here!
    var tampung = ''
    for( j = kata.length-1; j >= 0; j--){
            tampung += kata[j]
        }
    // console.log(tampung)
      if(kata === tampung){
        return true
    } else{
        return false
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false