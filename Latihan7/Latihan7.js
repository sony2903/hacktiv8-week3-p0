function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    // kalimat = 'I have a dream'
    spasi = ' '
    kalimat += spasi
    arr = []
    temp = ''
    for(i=0; i<kalimat.length; i++){
        if (kalimat[i] != spasi){
            temp += kalimat[i]
        } else if(kalimat[i] === spasi && temp.length > 0 ){
            arr.push(temp)
            temp = ''
        }
    }
    // console.log(arr)
    return arr.length    

  }
//   console.log(str)
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5