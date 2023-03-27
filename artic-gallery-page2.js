var page2ArtPiece = sessionStorage.getItem("page2ArtPiece");
page2ArtPiece = JSON.parse(page2ArtPiece);
spotLightImage = document.getElementById("spotLightImage");
spotLightImage.src = `https://www.artic.edu/iiif/2/${page2ArtPiece.image_id}/full/843,/0/default.jpg`
document.getElementById("artTitle").innerText = `${page2ArtPiece.title}`
document.getElementById("artArtist").innerText = `${page2ArtPiece.artist_display}`
document.getElementById("artDate").innerText = `${page2ArtPiece.date_display}`
document.getElementById("addToCollection").addEventListener("click", () => {
    document.getElementById("addToCollection").innerText = "added"
    if(localStorage.getItem("personalCollection")){
        console.log(localStorage.getItem("personalCollection"));
        personalCollection = JSON.parse(localStorage.getItem("personalCollection"));
        personalCollection.push(page2ArtPiece);
        personalCollection = JSON.stringify(personalCollection)
        localStorage.setItem("personalCollection", personalCollection);
    }else{
        let personalCollection = [];
        personalCollection.push(page2ArtPiece)
        localStorage.setItem("personalCollection", JSON.stringify(personalCollection));
    }
})
// console.log(document.getElementById("artArtist"));