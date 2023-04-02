var page2ArtPiece = sessionStorage.getItem("page2ArtPiece");
page2ArtPiece = JSON.parse(page2ArtPiece);
spotLightImage = document.getElementById("spotLightImage");
spotLightImage.src = `${page2ArtPiece.imageSrc}`
document.getElementById("artTitle").innerText = `${page2ArtPiece.title}`
document.getElementById("artArtist").innerText = `${page2ArtPiece.artist}`
document.getElementById("artDate").innerText = `${page2ArtPiece.date}`
document.getElementById("addToCollection").addEventListener("click", () => {
    document.getElementById("addToCollection").innerText = "added"
    if(localStorage.getItem("personalCollection")){
        personalCollection = JSON.parse(localStorage.getItem("personalCollection"));
        personalCollection[page2ArtPiece.title] = page2ArtPiece;
        personalCollection = JSON.stringify(personalCollection)
        localStorage.setItem("personalCollection", personalCollection);
    }else{
        let personalCollection = {};
        personalCollection[page2ArtPiece.title] = page2ArtPiece;
        localStorage.setItem("personalCollection", JSON.stringify(personalCollection));
    }
})
// console.log(document.getElementById("artArtist"));
// const page2ArtPiece = {
//     imageSrc:`${data.records[w].images[0].iiifbaseuri}/full/full/0/default.jpg`,
//     title: data.records[artpiece.id].title,
//     date: data.records[artpiece.id].dated,  
//     artist: data.records[artpiece.id].provenance,     
// }