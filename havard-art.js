fetch(`https://api.harvardartmuseums.org/object?${API_key.havard}`) 
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
         console.error('Error', error)
    });