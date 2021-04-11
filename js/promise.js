const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("dsfa")
        resolve("3432");
    }, 5);
})

myPromise.then((value) => {console.log(value);}, (value) => {console.log(value);})