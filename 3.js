function sequence(bilangan) {
    // cek kalau bilangan bukan angka
    if (isNaN(bilangan)) return false;

    // cek kalau bilangan merupakan negatif 
    if (bilangan <= 0) return "Parameter harus bilangan positif!";

    let tampung = [];
    tampung[0] = bilangan;
    let y = 1;
    let x = bilangan;

    while (x != 1) {

        if (x % 2 == 0) {
            tampung[y] = Math.ceil(x / 2);
            x = Math.ceil(x / 2);
        }
        else {
            tampung[y] = Math.ceil(3 * x) + 1;
            x = Math.ceil((3 * x) + 1);

        }
        y = y + 1;
    }
    tampung[y] = "Count : " + tampung.length;
    return tampung;
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}