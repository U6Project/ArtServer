const table = document.createElement('table');
const gallery = document.getElementById("Gallery");

table.style.textAlign = "right"; // move all the images to the right

fetch(`https://api.harvardartmuseums.org/object?apikey=${API_key.havard}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log(error));
