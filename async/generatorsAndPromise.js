function async(generator) {
    return function () {
    var iterator = generator.apply(this, arguments);
    
    function handle(result) {
            if (result.done) return Promise.resolve(result.value);
            return Promise.resolve(result.value).then(function (res) {
    return handle(iterator.next(res));
    },
    
    function (err) {
    return handle(iterator.throw(err));
    });
    }

    try {
    return handle(iterator.next());
    } catch (ex) {
    return Promise.reject(ex);
    }
};
}





async(function* () {
    try {
    var result = yield Promise.resolve("hello");
    console.log(result);
    } catch (err) {
    console.log('caught in async routine');
    console.log(err);
    }
 })();


 
 function execute(generator, yeildValue) {
    const next = generator.next(yeildValue);
  
    if (!next.done) {
      next.value.then(result => execute(generator, result))
                .catch(err => generator.throw(err));
    } else {
      console.log(next.value);
    }
  }
    

execute(function* () {
    try {
    var result = yield Promise.resolve("hello");
    console.log(result);
    } catch (err) {
    console.log('caught in async routine');
    console.log(err);
    }
 });