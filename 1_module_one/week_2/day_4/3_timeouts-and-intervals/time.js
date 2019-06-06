const timeManager = (function manageTime() {
    "use strict";

    var intervalId = null;

    function startCountingSeconds() {
        var secs = 1;

        setTimeout(() => {
            console.log(`tick : ${secs}`)
            intervalId = setInterval(() => {
                console.log(`tick : ${++secs}`);
            }, 1000);
        }, 1000)

    }

    function stopCountingSeconds() {
        if (!intervalId) return;
        return clearInterval(intervalId);
    }

    return {
        startCountingSeconds,
        stopCountingSeconds
    }

}());

timeManager.startCountingSeconds();

setTimeout(() => {
    timeManager.stopCountingSeconds();
}, 11000); // stop after 10secs elapsed
