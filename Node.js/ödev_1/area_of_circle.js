function areaOfCircle(r) {
    return Math.PI * r * r;
}

const arg = process.argv.slice(2)

let result= areaOfCircle(arg[0] * 1);

if (arg > 0 && arg) {
    console.log(`Yarıçapı ${arg} olan dairenin alanı: ${result}'dir.`);
} else {
    console.log("girilen değer pozitif olmalıdır.");
}
