function cekPrima(n) {
    var max = Math.sqrt(n);
    for (var i = 2; i <= max; i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}
function randomSize(hitung) {
    let add = 0;
    let x = 0;
    let tampung = [];
    let flag = 0;
    let sum = 0;
    for (var n = 2; n < 30 && flag != 1; n++) {
        if (add == hitung) flag = 1;
        if (cekPrima(n)) {
            tampung[x] = n;
            add++;
            x++;
            sum += n;
        }
    }
    return {
        angka: tampung,
        count: sum
    };
}