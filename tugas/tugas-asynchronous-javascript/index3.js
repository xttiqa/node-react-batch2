var filterBooksPromise = require('./promise2.js');

filterBooksPromise(true, 50)
.then(result => console.log(result))
.catch(err => console.log(err.message));

(async function() {
    try {
        let result2 = await filterBooksPromise(false, 250);
        console.log(result2);
    } catch(err) {
        console.log(err.message);
    }

    try {
        let result3 = await filterBooksPromise(true, 30);
        console.log(result3);
    } catch(err) {
        console.log(err.message);
    }
})();
