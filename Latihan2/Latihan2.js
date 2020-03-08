function balikString(kata){
    var katabalik = ''
    kataLength = kata.length
    for(var i=kataLength - 1; i >= 0; i--){
        katabalik += kata[i]        
    }
    return katabalik
}
console.log(balikString('hello world!'))