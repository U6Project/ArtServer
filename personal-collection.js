const personalCollection = JSON.parse(localStorage.getItem('personalCollection'));
const gallery = document.getElementById("Gallery");

const createRow = (className, text, style) => {
  const row = document.createElement("div");
  row.className = className;
  row.style = style;
  row.innerText = text;
  return row;
};

const createImage = (src, className, style) => {
  const image = document.createElement("img");
  image.className = className;
  image.style = style;
  image.src = src;
  return image;
};

const createButton = (text, className, style, clickHandler) => {
  const button = document.createElement("button");
  button.className = className;
  button.style = style;
  button.innerText = text;
  button.addEventListener('click', clickHandler);
  return button;
};

for (let i = Object.keys(personalCollection).length - 1; i >= 0; i--) {
  const artwork = personalCollection[Object.keys(personalCollection)[i]];

  const showCase = document.createElement("div");
  showCase.className = "mt-5 row text-center";

  const artTile = createRow("h1 mt-3", artwork.title, "font-family: 'Montserrat', sans-serif; color: bisque;");
  const artDate = createRow("h1 mb-5", artwork.date, "font-family: 'Montserrat', sans-serif; color: bisque;");
  const spotLightImage = createImage(artwork.imageSrc, "img-fluid img-thumbnail rounded mx-auto d-block", "max-width: 30vh;");
  const artArtist = createRow("h3 mt-2", artwork.artist, "font-family: 'Montserrat', sans-serif; color: bisque;");
  const removeBtn = createButton("remove from collection?", "btn btn-outline-warning mx-auto d-block", "max-width: 300px;", () => {
    removeBtn.innerText = 'removed';
    delete personalCollection[Object.keys(personalCollection)[i]];
    localStorage.setItem('personalCollection', JSON.stringify(personalCollection));
  });

  showCase.append(artTile, artDate, spotLightImage, artArtist, removeBtn);
  gallery.appendChild(showCase);
}