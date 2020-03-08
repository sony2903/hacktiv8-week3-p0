function pasanganTerbesar(num) {
    // you can only write your code here!
    // num = 641573
    angka = num.toString()
    a = angka.length-1
    arr = []
    temp = ''
        for(h=0; h<angka.length; h++){
            arr.push(angka[h]+angka[h+1])
        }
        for(i=0; i<arr.length; i++){
            for(j=0; j<arr.length; j++){
                if(arr[j]<arr[i]){
                    temp = arr[j]
                    arr[j] = arr[i]
                    arr[i] = temp
                }
            }
        }
    // console.log(arr)
    return arr[0]

  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99