function dataHandling2(input){
input.splice(1, 2, "Roman Alamsyah Elsharawy") 
input.splice(2, 0, "Provinsi Bandar Lampung")
input.splice(4, 1, "Pria")
input.splice(5, 0, "SMA Internasional Metro")
//array
console.log(input)
var predate = input[3].split('/');
// console.log(predate)

//perubahan angka ke nama bulan
switch(predate[1]){
    case '01' :
        // predate[1] = 'Januari'
        console.log('Januari')
    break
    case '02' :
        // predate[1] = 'Februari'
        console.log('Februari')
    break
    case '03' :
        // predate[1] = 'Maret'
        console.log('Maret')
    break
    case '04' :
        // predate[1] = 'April'
        console.log('April')
    break
    case '05' :
        // predate[1] = 'Mei'
        console.log('Mei')
    break
    case '06' :
        // predate[1] = 'Juni'
        console.log('Juni')
    break
    case '07' :
        // predate[1] = 'Juli'
        console.log('Juli')
    break
    case '08' :
        // predate[1] = 'Agustus'
        console.log('Agustus')
    break
    case '09' :
        // predate[1] = 'September'
        console.log('September')
    break
    case '10' :
        // predate[1] = 'Oktober'
        console.log('Oktober')
    break
    case '11' :
        // predate[1] = 'November'
        console.log('November')
    break
    case '12' :
        // predate[1] = 'Desember'
        console.log('Desember')
    break
    default :
    }
    
    //gabung
    var nonarr_date = predate.join('-')

    //di sort
     console.log(predate.sort((a, b) => b-a))

    // lanjutan gabung
    console.log(nonarr_date)


//limit karakter 15
batasnama = input[1].slice(0, 14)
input[1] = batasnama
return input[1]
}

input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

console.log(dataHandling2(input))

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

