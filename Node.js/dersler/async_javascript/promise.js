const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('veriler alındı');
    }, 2000);
    reject('bağlantı hatası');
});

promise
    .then(
    (data) => {
        console.log(data);
    }
    // (error) => {
    //     console.log(error);
    // }
).catch(err => console.log(err));