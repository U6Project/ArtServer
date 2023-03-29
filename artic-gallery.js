<<<<<<< HEAD
let page = 1;
=======
let page = Math.floor(Math.random() * (100 - 4)) + 4
>>>>>>> cb8864e453d392baf3fdccc72c58198b7e514724
let expoObj = {
    page2ArtPiece: null,
}
fillGallery();

document.getElementById("prev").addEventListener("click", () => {
    if(page === 1){
        return
    }else{
        page--
        fillGallery()
    }
});

document.getElementById("next").addEventListener("click",() => {
    page++
    fillGallery()
});

function fillGallery(){
    const Gallery = document.getElementById("Gallery");
    Gallery.innerHTML = "";
    const column1 = document.createElement("div");
    const column2 = document.createElement("div");
    const column3 = document.createElement("div");
    column1.className = "col-4";
    column2.className = "col-4";
    column3.className = "col-4";
    Gallery.append(column1);
    Gallery.append(column2);
    Gallery.append(column3);

    fetch(`https://your-api-url.com/api/v1/artworks?page=${page}&limit=15`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let w = 0
        for(let i = 0; i < 5; i++){
            let artpiece = document.createElement("a");
            let artimage = document.createElement("img");
            artpiece.className = `row m-2 reveal`
            artpiece.id = "" + w
            artpiece.href = "your-artic-gallery-page2.html"
            artimage.className = "img-fluid img-thumbnail"
            artimage.src = `https://your-api-url.com${data.records[w].image_url}`
            artpiece.addEventListener("click", () => {
                console.log(data.records[artpiece.id])
                var page2ArtPiece = JSON.stringify(data.records[artpiece.id]);
                sessionStorage.setItem("page2ArtPiece", page2ArtPiece);
            })
            artpiece.append(artimage);
            column1.append(artpiece);
            w++;
        }
        for(let i = 0; i < 5; i++){
            let artpiece = document.createElement("a");
            let artimage = document.createElement("img");
            artpiece.className = `row m-2 reveal`
            artpiece.id = "" + w
            artpiece.href = "your-artic-gallery-page2.html"
            artimage.className = "img-fluid img-thumbnail"
            artimage.src = `https://your-api-url.com${data.records[w].image_url}`
            artpiece.addEventListener("click", () => {
                console.log(data.records[artpiece.id])
                var page2ArtPiece = JSON.stringify(data.records[artpiece.id]);
                sessionStorage.setItem("page2ArtPiece", page2ArtPiece);
            })
            artpiece.append(artimage);
            column2.append(artpiece);
            w++;
        }
        for(let i = 0; i < 5; i++){
            let artpiece = document.createElement("a");
            let artimage = document.createElement("img");
            artpiece.className = `row m-2 reveal`
            artpiece.id = "" + w
            artpiece.href = "your-artic-gallery-page2.html"
            artimage.className = "img-fluid img-thumbnail"
            artimage.src = `https://your-api-url.com${data.records[w].image_url}`
            artpiece.addEventListener("click", () => {
                console.log(data.records[artpiece.id])
                var page2ArtPiece = JSON.stringify(data.records[artpiece.id]);
                sessionStorage.setItem("page2ArtPiece", page2ArtPiece);
            })
            artpiece.append(artimage);
            column3.append
        }
<<<<<<< HEAD
    }
)}
=======
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
>>>>>>> cb8864e453d392baf3fdccc72c58198b7e514724
