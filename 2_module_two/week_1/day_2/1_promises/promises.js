// OLD SCHOOL WAY : callbacks only
function doStuffLater(clbk) {
    setTimeout(() => {
        clbk("job done !");
    }, 5000);
}

function displayResult(res) {
    console.log(res);
}

doStuffLater(displayResult);

// NEW SCHOOL WAY : use Promises

function doAsyncStuff() {
    var count = 0;
    return new Promise((resolve, reject) => {
        setInterval(() => {
            count += 1;
            if (count === 10) resolve(count);
        }, 1000)
    });
}

doAsyncStuff().then(res => {
    console.log(res);
});


function getAsyncResult() {
    return new Promise((resolve, reject) => {
        var score;
        setTimeout(() => {
            // i only win if score is greater than .5
            score = Math.random();
            if (score > .5) resolve("ok");
            else reject("not ok");
        }, 5000);
    });
}

getAsyncResult()
.then(win => console.log(win))
.catch(loose => console.log(loose))

