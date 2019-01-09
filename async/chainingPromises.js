Promise.resolve('Hello').then(
                     function step2(result) {
                         console.log('Step 2 received ' + result);
                        return 'Greetings from step 2'; // Explicit return value
                     }
    ).then(
            function step3(result) {
          console.log('Step 3 received ' + result); // No explicit return value
    }
    ).then(
    function step4(result) {
    console.log('Step 4 received ' + result);
    return Promise.resolve('fulfilled value'); // Return a promise
    }
    ).then(
    function step5(result) {
    console.log('Step 5 received ' + result);
    }
    );