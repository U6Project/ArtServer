var page2ArtPiece = sessionStorage.getItem("page2ArtPiece");
page2ArtPiece = JSON.parse(page2ArtPiece);
console.log(page2ArtPiece);
spotLightImage = document.getElementById("spotLightImage");
spotLightImage.src = `https://www.artic.edu/iiif/2/${page2ArtPiece.image_id}/full/843,/0/default.jpg`
document.getElementById("artTitle").innerText = `${page2ArtPiece.title}`
document.getElementById("artArtist").innerText = `${page2ArtPiece.artist_display}`
document.getElementById("artDate").innerText = `${page2ArtPiece.date_display}`

// console.log(document.getElementById("artArtist"));