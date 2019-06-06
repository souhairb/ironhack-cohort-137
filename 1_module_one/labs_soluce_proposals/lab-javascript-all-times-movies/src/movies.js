/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
    return movies.map(movie => {
        let duration = movie.duration;
        if (typeof duration === "string") {
            const timeVals = duration.match(/\d+|\D+|\d+|\D+/g);
            if (timeVals.length === 4) duration = (timeVals[0] * 60) + Number(timeVals[2]); // hours + minutes
            else if (timeVals.includes("h")) duration = timeVals[0] * 60; // only hour(s)
            else duration = timeVals[0]; // only minutes
        }
        const movieCopy = Object.assign({}, movie);
        movieCopy.duration = Number(duration);
        return movieCopy;
    });
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    const sum = movies.reduce((reducer, currMovie) => {
        return reducer + Number(currMovie.rate);
    }, 0);

    return Number((sum / movies.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramas = movies.filter(m => m.genre.includes("Drama"));
    return dramas.length ? ratesAverage(dramas) : undefined;
}

// utility function sorting movie array alphabeticaly

// Order by time duration, in growing order
function orderByDuration(movies) {
    return turnHoursToMinutes(movies).sort(function (movA, movB) {
        if (movA.duration === movB.duration) {
            if (movA.title < movB.title) return -1;
            if (movA.title > movB.title) return 1;
            return 0;
        }
        return movA.duration - movB.duration;
    });
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
    if (!movies.length) return; // returns undefined
    const filtered = movies.filter(m => {
        return m.director === "Steven Spielberg" && m.genre.includes("Drama");
    });
    return `Steven Spielberg directed ${filtered.length} drama movies!`;
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    return movies.sort((movA, movB) => {
        if (movA.duration === movB.duration) {
            if (movA.title < movB.title) return -1;
            if (movA.title > movB.title) return 1;
            return 0;
        }
    }).map(m => m.title).splice(0, 20);
}

// Best yearly rate average
function bestYearAvg(movies) {

    if (!movies.length) return; // returns undefined

    const groupedByYears = movies.reduce((acc, currMovie) => {
        const year = currMovie.year;
        if (acc[year]) acc[year].movies.push(currMovie);
        else acc[year] = { movies: [currMovie] };
        return acc;
    }, {});

    const summedUp = [];
    
    for (let year in groupedByYears) {
        const avg = ratesAverage(groupedByYears[year].movies);
        summedUp.push({year: Number(year), avg: avg});
    }

    const sorted = summedUp.sort((y1, y2) => y1.avg > y2.avg ? -1 : 1);

    return `The best year was ${sorted[0].year} with an average rate of ${sorted[0].avg}`;
}
