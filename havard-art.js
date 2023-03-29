const table = document.createElement('table');
const gallery = document.getElementById("Gallery");

table.style.textAlign = "right"; // move all the images to the right

fetch(`https://api.harvardartmuseums.org/object?apikey=${API_key.havard}`)
  .then(response => response.json())
  .then(data => {
    let row;
    data.records.forEach((record, index) => {
      if (index % 3 === 0) { // create a new row every 3 images
        row = document.createElement('tr');
        table.appendChild(row);
      }
      const imagePath = record.primaryimageurl || record.baseimageurl;
      const cell = document.createElement('td');
      const img = document.createElement('img');
      img.src = imagePath;
      img.width = "300"; 
      img.height = "300"; 
      img.onerror = () => { // hide the image if it fails to load
        img.style.display = "none";
      }
      cell.style.padding = "20px 50px 60px 100px"; // add 50 pixels of padding to the right of the cell
      cell.style.textAlign = "right"; // move the images to the right
      cell.appendChild(img);
      row.appendChild(cell);
    });
    document.body.appendChild(table);
  })
  .catch(error => console.log(error));
