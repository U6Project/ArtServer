let personalCollection = JSON.parse(localStorage.getItem('personalCollection'))
let gallery = document.getElementById("Gallery")
for(let i = Object.keys(personalCollection).length - 1; i > 0 ;i--){
    console.log(personalCollection[Object.keys(personalCollection)[i]])
    const showCase = document.createElement("div");
    const row1 = document.createElement("div")
    const row2 = document.createElement("div")
    const row3 = document.createElement("div")
    const row4 = document.createElement("div")
    const row5 = document.createElement("div")
    const artArtist = document.createElement("div");
    const artDate = document.createElement("div");
    const spotLightImage = document.createElement("img");
    const artTile = document.createElement("div");
    const addToCollection = document.createElement("button");
    row1.className = "mt-5 row text-center"
    row2.className = "row text-center"
    row3.className = "row text-center"
    row4.className = "row text-center"
    row5.className = "mb-5 row text-center"
    row1.style = "font-family: 'Montserrat', sans-serif; color: bisque;"
    row2.style = "font-family: 'Montserrat', sans-serif; color: bisque;"
    row3.style = "font-family: 'Montserrat', sans-serif; color: bisque;"
    row4.style = "font-family: 'Montserrat', sans-serif; color: bisque;"
    artArtist.className="h3 mt-2"
    artTile.className="h1 mt-3"
    artDate.class="h1 mb-5"
    spotLightImage.className="img-fluid img-thumbnail rounded mx-auto d-block"
    spotLightImage.style ="max-width: 30vh;"
    spotLightImage.src=`https://www.artic.edu/iiif/2/${personalCollection[Object.keys(personalCollection)[i]].image_id}/full/843,/0/default.jpg`
    addToCollection.style="max-width: 300px;"
    addToCollection.className="btn btn-outline-warning mx-auto d-block"
    artTile.innerText=`${personalCollection[Object.keys(personalCollection)[i]].title}`
    artDate.innerText=`${personalCollection[Object.keys(personalCollection)[i]].date_display}`
    artArtist.innerText = `${personalCollection[Object.keys(personalCollection)[i]].artist_display}`
    addToCollection.innerText = "remove from collection?"
    row1.append(artTile);
    row2.append(artDate);
    row3.append(spotLightImage);
    row4.append(artArtist);
    row5.append(addToCollection);
    gallery.append(row1);
    gallery.append(row2);
    gallery.append(row3);
    gallery.append(row4);
    gallery.append(row5);
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
<button type="button" id="addToCollection" class="btn btn-outline-warning mx-auto d-block" style="max-width: 500px;"><h1 class="h3">Add to Collection?</h1></button>
</div> */}
