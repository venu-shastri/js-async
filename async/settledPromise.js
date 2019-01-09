var promise = new Promise(function (resolve, reject) {
                 resolve(Math.PI);
                 reject(0); // Does nothing
                 resolve(Math.sqrt(-1)); // Does nothing
     });
    promise.then(function (number) {
    console.log('The number is ' + number);
    });
    