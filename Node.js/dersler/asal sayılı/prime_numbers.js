// https://discord.com/channels/145199608631394304/252814654114365441/939815789542912041

function showPrimeNumbers(low, high) {
    for (let i = low; i <= high; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}

showPrimeNumbers(7, 20);

// girdiğin parametreleri liste olarak döndürüyor. ilk iki elemen modül ve öçalşıştırğı dosya  olduğu için onları çıkardık.
console.log(process.argv.slice(2));
