fetch(`https://api.harvardartmuseums.org/object?apikey=${API_key.havard}`) // returns a Promise
    .then(response => response.json()) // also returns a Promise
    .then(data => {
        // do stuff with the data
        console.log(data) // prints the JSON data
    })
    .catch(error => console.log(error))