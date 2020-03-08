function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    selisih = arr[1] - arr[0]
    // console.log(selisih)
    kondisi = true
    for(i=1; i<arr.length; i++){
        if(arr[i]-arr[i-1] == selisih){
            kondisi = true
            // console.log(arr[i])
            // console.log(kondisi)
        } else {
            kondisi = false
            // console.log(arr[i])
            // console.log(kondisi)
            break
            
        }
    } return kondisi

  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false