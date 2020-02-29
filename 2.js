// 2.js
function ValidasiUsername(text) {

    let flag = 0;
    // cek kalau angka awal & akhir tidak sama, ex : 1fikri1 -> true | 1fikri2 -> false
    if (parseInt(text[0]) != parseInt(text[(text.length - 1)])) flag = 1;

    /* 
    cek kalau 
    - setelah karakter ke 2 dan setelah (n-1) merupakan huruf
    - minimal 5 karakter
    - karakter ke 1 dan n adalah angka 
    */
    var rules1 = /(^\d)([a-z]{3,6})(\d$)/ig;
    var stringRules1 = text.match(rules1);

    // kalau text tidak memenuhi kriteria
    if (stringRules1 == null || flag == 1)
        return false;

    // kalau memenuhi kriteria
    return true;
}

function validasiPassword(text) {
    /* 
        cek kalau 
        - mengandung huruf kecil a-z
        - mengandung angka
        - mengandung simbol '-'
        - terdiri dari 7-13 karakter
    */
    let rules1 = /^[a-z0-9\-]{7,13}$/ig;

    // proses regex
    let stringRules1 = text.match(rules1);

    // kalau tidak memenuhi kriteria
    if (stringRules1 == null) return false;

    // kalau memenuhi kriteria
    return true;
}