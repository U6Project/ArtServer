let page = 32;
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
})
document.getElementById("next").addEventListener("click", () => {
    page++
    fillGallery()
})

function fillGallery() {
    const Gallery = document.getElementById("Gallery");
    Gallery.innerHTML = "";

    const columns = [];
    for (let i = 0; i < 4; i++) {
        const column = document.createElement("div");
        column.className = "col-3";
        Gallery.append(column);
        columns.push(column);
    }

    fetch(`https://api.harvardartmuseums.org/object?apikey=${API_key.havard}&classification=Paintings&hasimage=1&size=100&page=${page}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let w = 0;
            for (let j = 0; j < columns.length; j++) {
                for (let i = 0; i < 5; i++) {
                    if(data.records[w].images && data.records[w].images.length != 0){
                        console.log("work")
                        const artpiece = document.createElement("a");
                        const artimage = document.createElement("img");
                        artpiece.className = `row m-2 reveal`;
                        artpiece.id = `${w}`;
                        artpiece.href = "artic-gallery-page2.html";
                        artimage.className = "img-fluid img-thumbnail";
                        // console.log(data.records[w].iiifbaseuri);
                        artimage.src = `${data.records[w].images[0].iiifbaseuri}/full/full/0/default.jpg`;
                        artpiece.addEventListener("click", () => {
                            // console.log(data.records[artpiece.id]);
                            // const page2ArtPiece = JSON.stringify(data.records[artpiece.id]);
                            const page2ArtPiece = {
                                imageSrc:`${data.records[artpiece.id].images[0].iiifbaseuri}/full/full/0/default.jpg`,
                                title: data.records[artpiece.id].title,
                                date: data.records[artpiece.id].dated,  
                                artist: data.records[artpiece.id].people[0].name,     
                            }
                            sessionStorage.setItem("page2ArtPiece", JSON.stringify(page2ArtPiece));
                        });
                        artpiece.append(artimage);
                        columns[j].append(artpiece);
                        w++;
                    }
                    
                }
            }
        })
        .catch(error => console.log(error));
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