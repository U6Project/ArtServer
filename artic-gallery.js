let page = Math.floor(Math.random() * (100 - 4)) + 4
// let page = 33;
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
function fillGallery() {
    const Gallery = document.getElementById("Gallery");
    Gallery.innerHTML = "";
    const columns = [];
    for (let i = 0; i < 3; i++) {
        const column = document.createElement("div");
        column.className = "col-4";
        Gallery.append(column);
        columns.push(column);
    }
    fetch(`https://api.artic.edu/api/v1/artworks/?page=${page}&limit=15`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let w = 0;
            for (let j = 0; j < columns.length; j++) {
                for (let i = 0; i < 5; i++) {
                    const artpiece = document.createElement("a");
                    const artimage = document.createElement("img");
                    artpiece.className = `row m-2 reveal`;
                    artpiece.id = `${w}`;
                    artpiece.href = "artic-gallery-page2.html";
                    artimage.className = "img-fluid img-thumbnail";
                    artimage.src = `https://www.artic.edu/iiif/2/${data.data[w].image_id}/full/843,/0/default.jpg`;
                    artpiece.addEventListener("click", () => {
                        console.log(data.data[artpiece.id]);
                        const page2ArtPiece = {
                            imageSrc:`https://www.artic.edu/iiif/2/${data.data[artpiece.id].image_id}/full/843,/0/default.jpg`,
                            title: data.data[artpiece.id].title,
                            date: data.data[artpiece.id].date_display,
                            artist: data.data[artpiece.id].artist_display,
                        }
                        // const page2ArtPiece = JSON.stringify(data.data[artpiece.id]);
                        sessionStorage.setItem("page2ArtPiece", JSON.stringify(page2ArtPiece));
                    });
                    artpiece.append(artimage);
                    columns[j].append(artpiece);
                    w++;
                }
            }
        });
}
// const page2ArtPiece = {
//     imageSrc:`${data.records[w].images[0].iiifbaseuri}/full/full/0/default.jpg`,
//     title: data.records[artpiece.id].title,
//     date: data.records[artpiece.id].dated,
//     artist: data.records[artpiece.id].provenance,
// }
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);