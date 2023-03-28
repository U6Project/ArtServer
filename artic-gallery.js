let page = Math.floor(Math.random() * (100 - 4)) + 4

let expoObj = {
    page2ArtPiece: null,
}
fillGallery()
document.getElementById("prev").addEventListener("click", () => {
    if(page === 1){
        return
    }else{
        page--
        fillGallery()
    }
})
document.getElementById("next").addEventListener("click",() => {
    page++
    fillGallery()
} )
function fillGallery(){
    const Gallery = document.getElementById("Gallery");
    Gallery.innerHTML = ""
    const column1 = document.createElement("div");
    const column2 = document.createElement("div");
    const column3 = document.createElement("div");
    column1.className = "col-4"
    column2.className = "col-4"
    column3.className = "col-4"
    Gallery.append(column1);
    Gallery.append(column2);
    Gallery.append(column3);
    fetch(`https://api.artic.edu/api/v1/artworks/?page=${page}&limit=15`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let w = 0
        for(let i = 0; i < 5; i++){
            let artpiece = document.createElement("a");
            let artimage = document.createElement("img");
            artpiece.className = `row m-2`
            artpiece.id = "" + w
            artpiece.href = "artic-gallery-page2.html"
            artimage.className = "img-fluid img-thumbnail"
            artimage.src = `https://www.artic.edu/iiif/2/${data.data[w].image_id}/full/843,/0/default.jpg`
            artpiece.addEventListener("click", () => {
                console.log(data.data[artpiece.id])
                var page2ArtPiece = JSON.stringify(data.data[artpiece.id]);
                sessionStorage.setItem("page2ArtPiece", page2ArtPiece);
            })
            artpiece.append(artimage);
            column1.append(artpiece);
            w++;
        }
        for(let i = 0; i < 5; i++){
            let artpiece = document.createElement("a");
            let artimage = document.createElement("img");
            artpiece.className = `row m-2`
            artpiece.id = "" + w
            artpiece.href = "artic-gallery-page2.html"
            artimage.className = "img-fluid img-thumbnail"
            artimage.src = `https://www.artic.edu/iiif/2/${data.data[w].image_id}/full/843,/0/default.jpg`
            artpiece.addEventListener("click", () => {
                console.log(data.data[artpiece.id])
                var page2ArtPiece = JSON.stringify(data.data[artpiece.id]);
                sessionStorage.setItem("page2ArtPiece", page2ArtPiece);
            })
            artpiece.append(artimage);
            column2.append(artpiece);
            w++;
        }
        for(let i = 0; i < 5; i++){
            let artpiece = document.createElement("a");
            let artimage = document.createElement("img");
            artpiece.className = `row m-2`
            artpiece.id = "" + w
            artpiece.href = "artic-gallery-page2.html"
            artimage.className = "img-fluid img-thumbnail"
            artimage.src = `https://www.artic.edu/iiif/2/${data.data[w].image_id}/full/843,/0/default.jpg`
            artpiece.addEventListener("click", () => {
                console.log(data.data[artpiece.id])
                var page2ArtPiece = JSON.stringify(data.data[artpiece.id]);
                sessionStorage.setItem("page2ArtPiece", page2ArtPiece);
            })
            artpiece.append(artimage);
            column3.append(artpiece);
            w++;
        }
    });
}