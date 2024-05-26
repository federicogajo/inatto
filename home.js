let issues = [
  { issue: "il diritto di copiare", time: "24.03.2024", place: "MI, IT" },
  { issue: "il diritto di fallire", time: "23.11.2024", place: "MI, IT" },
  { issue: "il diritto di distruggere", time: "16.05.2025", place: "MI, IT" },
  { issue: "il diritto di manipolare", time: "20.11.2025", place: "MI, IT" },
  { issue: "il diritto di dimenticare", time: "13.05.2026", place: "MI, IT" },
];

let issuesG = [
  "Given to be copied",
  "Out of failure",
  "Given to be destroyed",
  "Given to be manipulated",
  "Given to be forgotten",
];

let issuesLinks = [
  "archive.html",
  "archive.html",
  "archive.html",
  "archive.html",
  "archive.html",
];

let iss;
let issA;

let colors = [
  "#bde3f2", //azzurro
  "#ffb1cb", //rosa
  "#feff9c", //giallo
  "#aff5d7", //verde
  "#bdb5da", //lilla
];

let home;

// let hero;
// let heroPCTn;
// let heroP = "Per un nuovo ordine creativo";
// heroP = "INATTO</br>PER UN NUOVO ORDINAMENTO CREATIVO </br></br>";
// let heroTxtCtn;
// let heroTxt = [
//   // I diritti non sono solo quelli riconosciuti dalla legge. </br>
//   "Spesso ci comportiamo come se avessimo il diritto di agire in un certo modo, anche se formalmente quel diritto non esiste.</br></br>",
//   //   "La collaborazione tra più individui, anche quando involontaria, conferisce a quei comportamenti la legittimità che le autorità non gli riconoscono. Un diritto, per essere definito tale, deve essere condiviso. Di conseguenza, dal momento in cui vengono messi in atto da molti, questi comportamenti apparentemente arbitrari e istintivi diventano, di fatto, dei veri e propri diritti. </br></br>",
//   "INATTO è una rivista indipendente scritta da creativi per creativi, in uno scambio aperto e orizzontale, che dà voce a diversi attori e alle loro esigenze</br></br>",
//   //La coralità di punti di vista ne preserva l’integrità.
//   //   "Ciascuno è presentato in modo autentico e trasparente. I contenuti di INATTO vengono prodotti combinando parole e opere di diverse persone, in un dialogo reso possibile attraverso la rivista stessa.",
//   "La testata del magazine è la nostra Legislazione mentre ogni volume presenta uno dei Diritti da cui è composta.",
// ];
// //   "I diritti non sono solo quelli riconosciuti dalla legge. Spesso ci comportiamo come se avessimo il permesso di agire in un certo modo, anche se formalmente quel diritto non esiste. La collaborazione tra più individui, anche quando involontaria, conferisce a quei comportamenti la legittimità che le autorità non gli riconoscono. Un diritto, per essere definito tale, deve essere condiviso. Di conseguenza, questi comportamenti, anche se in modo apparente arbitrari e istintivi, dal momento in cui vengono messi in atto da molti, diventano, di fatto, veri e propri diritti. Questo causa ripercussioni tangibili sul sistema che li attua e sulle leggi che li regolamentano. Le leggi non si adattano ai tempi, nello stesso modo con cui lo fanno i comportamenti. L’avvento di Internet, dei social media e dell’intelligenza artificiale hanno rivoluzionato il settore creativo, influenzando aspetti tecnici, metodologici, produttivi e identitari. Affinché la legge si evolva è necessaria una presa di posizione, ma soprattutto la consapevolezza di coloro che fanno diretta esperienza delle implicazioni che regolamentano il sistema. l nostro obiettivo non è sovvertire il sistema, bensì rivelare questi “diritti non-diritti” e le relative controversie. Ridefinire il significato di certi comportamenti considerati negativi, esaltandone gli aspetti positivi. Le persone che li attuano passano dall’essere attori colpevoli di pratiche mal viste, a paladini di una nuova costituzione. INATTO è scritta da creativi per creativi, in uno scambio aperto e orizzontale, riuscendo a dare voce a diversi attori e alle loro esigenze. La coralità di voci preserva l’integrità di ciascun punto di vista, che viene presentato in modo autentico e trasparente. I protagonisti sono persone autorevoli, con un punto di vista dato dal loro coinvolgimento nel settore. La collettività dà origine ai contenuti di INATTO, i quali vengono prodotti combinando voci e opere di diverse persone, creando un dialogo attraverso la rivista stessa. La testata del magazine è la nostra Legislazione, dove ogni volume presenta uno dei Diritti da cui è composta. Ogni numero è suddiviso in Titoli, corrispondenti alle sezioni principali, a loro volta suddivise in Capi, contenenti i diversi Articoli. Le tematiche trattate sono a sostegno del diritto in questione. Se ad uno stesso argomento sono associati più Articoli, vengono indicati come Articolo N. e Articolo N. Bis. Il Volume del 27.05.24 discute del Diritto di copiare.";

// let header;
// let headerE;
// let headerIssue;
// let headerTime;
// let headerPlace;

//HOME BTN
home = document.createElement("a");
home.innerHTML = "INATTO";
home.classList.add("home");
home.href = "index.html";
document.body.appendChild(home);

// //HERO
// hero = document.createElement("div");
// hero.classList.add("hero");

// heroPCTn = document.createElement("div");
// heroPCTn.innerHTML = heroP;
// heroPCTn.classList.add("heroTimes");
// hero.appendChild(heroPCTn);

// for (let i = 0; i <= heroTxt.length - 1; i++) {
//   let e = heroTxtCtn + i;
//   e = document.createElement("div");
//   e.classList.add("heroTimes");
//   e.classList.add("heroTxtCtn-" + i);

//   let eTxt = heroTxt[i];
//   //   console.log(eTxt);
//   e.innerHTML = eTxt;

//   hero.appendChild(e);
// }

// // heroTxtCtn2.style = "font-size:2rem";
// document.body.appendChild(hero);

//ISSUES
for (let i = 0; i < issuesG.length; i++) {
  iss = document.createElement("div");
  iss.classList.add("issue");
  // iss.style.backgroundColor = "white";
  // iss.style.backgroundImage = "url('assets/images/home/" + i + ".gif')";
  // iss.style.backgroundImage = "url('assets/images/home/" + i + ".gif')";
  iss.style.backgroundImage = "url('assets/images/home2/" + i + ".png')";

  header = document.createElement("div");
  header.classList.add("header");
  header.style.backgroundColor = colors[i];

  //tutti gli elementini del singolo issue
  headerIssue = document.createElement("div");
  headerIssue.innerHTML = issues[i].issue;
  headerIssue.classList.add("headerIssue");
  headerTime = document.createElement("div");
  headerTime.innerHTML = issues[i].time;
  headerPlace = document.createElement("div");
  headerPlace.innerHTML = issues[i].place;
  headerPlace.classList.add("headerPlace");

  header.appendChild(headerIssue);
  header.appendChild(headerTime);
  header.appendChild(headerPlace);

  //big link in mezzo
  issA = document.createElement("a");
  issA.classList.add("issA");
  issA.innerHTML = issuesG[i];
  issA.href = issuesLinks[i];

  iss.appendChild(header);
  iss.appendChild(issA);
  document.body.appendChild(iss);
}

//FOOTER
let footer;
let footerE;
let footerEctn;
let footerDesCtn;
let footerDes =
  "INATTO è un progetto universitario sviluppato nel corso di Laboratorio di Progettazione di sistemi e artefatti complessi C1 della Laurea Magistrale in Design della Comunicazione del Politecnico di Milano. Il corso punta a riflettere sul valore sociale dell'editoria indipendente.</br>Il macrotema del progetto è la collaborazione, mentre il sottotema sono i diritti. </br></br>La rivista è scritta da creativi per creativi, con l'obiettivo di aprire una discussione su quelle che sono le esigenze di chi appartiene a questo settore. </br> La testata è la legislazione mentre ogni numero è nuovo diritto che viene legittimato attraverso le parole delle persone che hanno scritto gli articoli. </br> La rivista rende possibile un dialogo tra punti di vista diversi ma comunque importanti, nello scopo di discutere quei tabù che impediscono al sistema di evolversi.";
let footerTxt = [
  {
    sezione: "CCO–Redazione:</br>",
    contenuto:
      "Miguel Amaya, Ginevra Bernasconi, Giulia Bonalumi, Martina Esposito, Federico Gajo, Camilla Tosi",
  },
  {
    sezione: "Contesto:</br>",
    contenuto:
      "Laboratorio di Progettazione di sistemi e artefatti complessi, Sezione C1, A.A. 2023 - 2024</br> Laurea Magistrale in Design della Comunicazione, Scuola del Design, Politecnico di Milano",
  },
  {
    sezione: "Docenti:</br>",
    contenuto: "Elena Caratti, </br> Francesco Scagliarini",
  },
  { sezione: "Cultrice della materia: </br>", contenuto: "Sara Lavazza" },
];

footer = document.createElement("div");
footer.classList.add("footer");

footerEctn = document.createElement("div");
footerEctn.classList.add("footerEctn");

footerDesCtn = document.createElement("div");
footerDesCtn.classList.add("footerDes");
footerDesCtn.innerHTML = footerDes;
footer.appendChild(footerDesCtn);

for (let i = 0; i < footerTxt.length; i++) {
  footerE = document.createElement("div");
  footerE.classList.add("footerE");
  footerE.style.minWidth = "12vw";
  footerE.style.paddingRight = "1vw";
  //   console.log(footerE);
  footerE.innerHTML = footerTxt[i].sezione + footerTxt[i].contenuto;
  footerEctn.appendChild(footerE);
}
footer.appendChild(footerEctn);
document.body.appendChild(footer);

//FINE
console.log("works");
