const table = document.createElement('table');
const imageRow = table.insertRow(); // Add new row for images

fetch(`https://api.harvardartmuseums.org/object?apikey=${API_key.havard}`)
  .then(response => response.json())
  .then(data => {
    data.records.forEach(record => {
      const row = table.insertRow();
      const titleCell = row.insertCell();
      const descriptionCell = row.insertCell();
      const imageCell = row.insertCell();

      titleCell.textContent = record.title;
      descriptionCell.textContent = record.description;

      const image = document.createElement('img');
      image.src = record.primaryimageurl;
      image.alt = record.title;
      image.style.width = '200px';

      // Append the image to the new cell in the image row
      const imageCellInImageRow = imageRow.insertCell();
      imageCellInImageRow.appendChild(image);

      // Append the row to the table
      table.appendChild(row);
    });
    document.body.appendChild(table);
  })
  .catch(error => console.log(error));
