let personalCollection = JSON.parse(localStorage.getItem('personalCollection'))
let gallery = document.getElementById("Gallery")
let i = 0
console.log(personalCollection)
while(i < personalCollection.length){
    let artpiece = document.createElement("div");
    let artimage = document.createElement("img");
    artpiece.className = `row m-2`
    artpiece.id = "" + i
    artpiece.href = "artic-gallery-page2.html"
    artimage.className = "img-fluid img-thumbnail"
    artimage.style = "max-width: 30vw; "
    artimage.src = `https://www.artic.edu/iiif/2/${personalCollection[i].image_id}/full/843,/0/default.jpg`
    i++
    artpiece.append(artimage);
    gallery.append(artpiece);
}