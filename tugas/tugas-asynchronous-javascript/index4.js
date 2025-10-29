var filterCarsPromise = require('./promise3.js');

filterCarsPromise("black", 2019)
.then(result => console.log(result))
.catch(err => console.log(err.message));

filterCarsPromise("silver", 2017)
.then(result => console.log(result))
.catch(err => console.log(err.message));

(async function() {
    try {
        let result3 = await filterCarsPromise("grey", 2019);
        console.log(result3);
    } catch(err) {
        console.log(err.message);
    }

    try {
        let result4 = await filterCarsPromise("grey", 2018);
        console.log(result4);
    } catch(err) {
        console.log(err.message);
    }

    try {
        let result5 = await filterCarsPromise("black", 2020);
        console.log(result5);
    } catch(err) {
        console.log(err.message);
    }
})();
