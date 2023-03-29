const personalCollection = JSON.parse(localStorage.getItem('personalCollection'));
const gallery = document.getElementById('Gallery');

for (let i = Object.keys(personalCollection).length - 1; i > 0; i--) {
  const {
    artist_display,
    date_display,
    image_id,
    title
  } = personalCollection[Object.keys(personalCollection)[i]];
  const showcase = document.createElement('div');
  showcase.className = 'showcase';
  showcase.innerHTML = `
    <div class="mt-5 row text-center" style="font-family: 'Montserrat', sans-serif; color: bisque;">
      <div class="h1 mt-3">${title}</div>
      <div class="h1">${date_display}</div>
      <img class="img-fluid img-thumbnail rounded mx-auto d-block" style="max-width: 30vh;" src="https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg" alt="${title}">
      <div class="h3 mt-2">${artist_display}</div>
      <button class="btn btn-outline-warning mx-auto d-block" style="max-width: 300px;">remove from collection?</button>
    </div>
  `;
  const removeBtn = showcase.querySelector('button');
  removeBtn.addEventListener('click', () => {
    removeBtn.innerText = 'removed';
    delete personalCollection[Object.keys(personalCollection)[i]];
    localStorage.setItem('personalCollection', JSON.stringify(personalCollection));
  });
  gallery.appendChild(showcase);
}
console.log()
{/* <div class="row1 text-center" style="font-family: 'Montserrat', sans-serif; color: bisque;">
<h1 id="artTitle" class="display-1 mt-3"></h1>
</div>
<div class="row2 text-center" style="font-family: 'Montserrat', sans-serif; color: bisque;">
<h1 id="artDate" class="h1 mb-5"></h1>
</div>
<div class="row3">
<div class="col-1"></div>
<div class="col-10"><img id="spotLightImage" class="img-fluid img-thumbnail rounded mx-auto d-block" style ="max-height: 90vh;"></div>
<div class="col-1"></div>
</div>
<div class="row4 text-center mt-2" style="font-family: 'Montserrat', sans-serif; color: bisque;">
<h1 id="artArtist" class="h3 mt-2"></h1>
</div>
<div class="row5 text-center mt-5" style="font-family: 'Montserrat', sans-serif; color: bisque;">
<button type="button" id="removefromCollection" class="btn btn-outline-warning mx-auto d-block" style="max-width: 500px;"><h1 class="h3">Add to Collection?</h1></button>
</div> */}
