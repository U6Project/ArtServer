const table = document.createElement('table');

fetch(`https://api.harvardartmuseums.org/object?apikey=${API_key.havard}`)
  .then(response => response.json())
  .then(data => {
    data.records.forEach(record => {
      const row = table.insertRow();
      const titleCell = row.insertCell();
      const descriptionCell = row.insertCell();
      const imageCell = row.insertCell(); // Add new cell for image

      titleCell.textContent = record.title;
      descriptionCell.textContent = record.description;

      // Create new image element and set its attributes
      const image = document.createElement('img');
      image.src = record.primaryimageurl;
      image.alt = record.title;
      image.style.width = '200px';

      // Append the image to the new cell
      imageCell.appendChild(image);
    });
    document.body.appendChild(table);
  })
  .catch(error => console.log(error));
