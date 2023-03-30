// const table = document.createElement('table');
// const gallery = document.getElementById("Gallery");

// table.style.textAlign = "right"; // move all the images to the right

// fetch(`https://api.harvardartmuseums.org/object?apikey=${API_key.havard}`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => console.log(error));

  let page = 1;
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
    const column4 = document.createElement("div");
    column1.className = "col-3"
    column2.className = "col-3"
    column3.className = "col-3"
    column4.className = "col-3"
    Gallery.append(column1);
    Gallery.append(column2);
    Gallery.append(column3);
    Gallery.append(column4);
    fetch(`https://api.harvardartmuseums.org/object?apikey=${API_key.havard}&size=20&page=${page}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let w = 0
        for(let i = 0; i < 5; i++){
            let artpiece = document.createElement("a");
            let artimage = document.createElement("img");
            artpiece.className = `row m-2`
            artpiece.className = `row m-2 reveal`
            artpiece.id = "" + w
            artpiece.href = "artic-gallery-page2.html"
            artimage.className = "img-fluid img-thumbnail"
            // artimage.src = `https://www.artic.edu/iiif/2/${data.records[w]}/full/843,/0/default.jpg`
            artimage.src = `${data.records[w].images[0].iiifbaseuri}/full/full/0/default.jpg`
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
          artpiece.className = `row m-2 reveal`
          artpiece.id = "" + w
          artpiece.href = "artic-gallery-page2.html"
          artimage.className = "img-fluid img-thumbnail"
          // artimage.src = `https://www.artic.edu/iiif/2/${data.records[w]}/full/843,/0/default.jpg`
          artimage.src = `${data.records[w].images[0].iiifbaseuri}/full/full/0/default.jpg`
          artpiece.addEventListener("click", () => {
              console.log(data.data[artpiece.id])
              var page2ArtPiece = JSON.stringify(data.data[artpiece.id]);
              sessionStorage.setItem("page2ArtPiece", page2ArtPiece);
          })
          artpiece.append(artimage);
          column4.append(artpiece);
          w++;
      }
        for(let i = 0; i < 5; i++){
          let artpiece = document.createElement("a");
          let artimage = document.createElement("img");
          artpiece.className = `row m-2`
          artpiece.className = `row m-2 reveal`
          artpiece.id = "" + w
          artpiece.href = "artic-gallery-page2.html"
          artimage.className = "img-fluid img-thumbnail"
          // artimage.src = `https://www.artic.edu/iiif/2/${data.records[w]}/full/843,/0/default.jpg`
          artimage.src = `${data.records[w].images[0].iiifbaseuri}/full/full/0/default.jpg`
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
        artpiece.className = `row m-2 reveal`
        artpiece.id = "" + w
        artpiece.href = "artic-gallery-page2.html"
        artimage.className = "img-fluid img-thumbnail"
        // artimage.src = `https://www.artic.edu/iiif/2/${data.records[w]}/full/843,/0/default.jpg`
        artimage.src = `${data.records[w].images[0].iiifbaseuri}/full/full/0/default.jpg`
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