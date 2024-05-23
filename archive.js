//ARTWORKS
let artworks = [
  {
    author: "Cecilia Aguzzi",
    title: "C–BASE",
    tecnica: "Poster",
    format: ".png",
  },
  {
    author: "Francesco Bonetti",
    title: "Untitled",
    tecnica: "Coding",
    format: ".png",
  },
  {
    author: "Chiara Ruozzo",
    title: "Untitled",
    tecnica: "Fotografia",
    format: ".jpg",
  },
  {
    author: "Nicola Maria Patitucci",
    title: "Untitled",
    tecnica: "Fotografia",
    format: ".png",
  },
  {
    author: "Enrico Isidori",
    title: "Pixel/Notpixel",
    tecnica: "Coding",
    format: ".png",
  },
  {
    author: "Alessandro De Vecchi",
    title: "Untitled",
    tecnica: "Grafica",
    format: ".png",
  },
  {
    author: "Emanuel Simionato",
    title: "Bugs4000",
    tecnica: "3D + coding",
    format: ".png",
  },
  {
    author: "Francesco Fettucciari",
    title: "5_FINIRÀ",
    tecnica: "Grafica",
    format: ".jpg",
  },
  {
    author: "Stefanile",
    title: "<3<3",
    tecnica: "Illustrazione",
    format: ".png",
  },
  {
    author: "Francesco Scarfone",
    title: "I’m not real",
    tecnica: "3D",
    format: ".png",
  },
  {
    author: "Francesco Bellagamba",
    title: "Untitled",
    tecnica: "Illustrazione",
    format: ".png",
  },
  {
    author: "Fuso Studio",
    title: "Totem",
    tecnica: "Illustrazione",
    format: ".jpeg",
  },
  {
    author: "Germana Sironi",
    title: "Untitled",
    tecnica: "Pittura",
    format: ".jpg",
  },
  {
    author: "Francesca Di Marco",
    title: "Untitled",
    tecnica: "Pittura",
    format: ".png",
  },
  {
    author: "Federico Gajo",
    title: "Fffrecce",
    tecnica: "Grafica",
    format: ".png",
  },
  {
    author: "Gionasssi",
    title: "24.03.2024",
    tecnica: "JazzMiExperiment",
    format: ".jpg",
  },
];

//ISSUE
let issues = {
  issue: "il diritto di copiare",
  time: "24.03.2024",
  place: "MI, IT",
};

let issueHead;
let artCtn; //container di tutti i boxini

let art;
let artAuthor;
let artTitle;
let artImage;
let artImageCtn;
let artImageNum;
let artTecnica;
let artDownload;

let home;

//HOME BTN
home = document.createElement("a");
home.innerHTML = "INATTO";
home.classList.add("home");
home.href = "index.html";
document.body.appendChild(home);

artCtn = document.createElement("div");
artCtn.classList.add("artCtn");

//ISSUES
issueHead = document.createElement("div");
issueHead.classList.add("header");
issueHead.classList.add("issue");

//tutti gli elementini del singolo issue
headerIssue = document.createElement("div");
headerIssue.innerHTML = issues.issue;
headerIssue.classList.add("headerIssue");
headerTime = document.createElement("div");
headerTime.innerHTML = issues.time;
headerPlace = document.createElement("div");
headerPlace.innerHTML = issues.place;
headerPlace.classList.add("headerPlace");

issueHead.appendChild(headerIssue);
issueHead.appendChild(headerTime);
issueHead.appendChild(headerPlace);
document.body.appendChild(issueHead);

//ARTWORKS
for (let i = 0; i < artworks.length; i++) {
  art = document.createElement("div");
  art.classList.add("artwork");
  art.classList.add("header");

  //tutti gli elementini del singolo issue
  artAuthor = document.createElement("div");
  artAuthor.innerHTML = artworks[i].author;
  artAuthor.classList.add("minWidth");
  artAuthor.classList.add("txt");

  artTitle = document.createElement("div");
  artTitle.innerHTML = artworks[i].title;
  artTitle.classList.add("minWidth");
  artTitle.classList.add("txt");
  artTitle.classList.add("txtCenter");

  //container per le immagini
  artImageCtn = document.createElement("div");
  artImageCtn.classList.add("minWidth");
  artImageCtn.classList.add("artImageCtn");

  artImageNum = document.createElement("div");
  artImageNum.innerHTML = i + 1;
  artImageNum.classList.add("artImageNum");

  artImage = document.createElement("img");
  artImage.classList.add("artImage");
  //   artImage.src =
  //     "assets/images/given to be copied/" + artworks[i].author + ".png";
  artImage.src =
    "assets/images/given to be copied-display/" + artworks[i].author + ".webp";
  // idea di phind per caricare le immagini a prescindere - mettere il formato come attributo all'interno dell'oggetto artwork

  // INGRANDIMENTO IMMAGINI
  artImage.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      // Mobile view: enlarge image to 100vw
      if (this.style.maxWidth !== "100vw") {
        // Check if the image is not already enlarged
        this.style.minWidth = "auto";
        this.style.maxWidth = "100vw"; // Enlarge the image
        this.style.cursor = "sw-resize"; // Change cursor to indicate resizing

        let artImages = Array.from(document.getElementsByClassName("artImage"));
        console.log("we");
        console.log(artImages);

        artImages.forEach((e) => {
          e.style.maxHeight = "auto";
        });
      } else {
        // Reset the image to its initial dimensions
        this.style.maxWidth = null;
        this.style.cursor = ""; // Return to default cursor
      }
    } else {
      if (this.style.maxHeight !== "100vh") {
        // Check if the image is not already enlarged
        // console.log("click");
        this.style.maxHeight = "100vh"; // Enlarge the image
        this.style.cursor = "sw-resize"; // Change cursor to indicate resizing
      } else {
        // Reset the image to its initial dimensions
        this.style.maxHeight = null;
        this.style.cursor = ""; // Return to default cursor
      }
    }
  });

  artTecnica = document.createElement("div");
  artTecnica.innerHTML = artworks[i].tecnica;
  artTecnica.classList.add("minWidth");
  artTecnica.class