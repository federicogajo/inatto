let issues = [
  { issue: "il diritto di copiare", time: "24.03.2024", place: "MI, IT" },
  { issue: "il diritto di manipolare", time: "12.09.2024", place: "MI, IT" },
  { issue: "il diritto di distruggere", time: "25.03.2025", place: "MI, IT" },
  { issue: "il diritto di dimenticare", time: "18.09.2025", place: "MI, IT" },
  { issue: "il diritto di fallire", time: "20.03.2026", place: "MI, IT" },
];

let issuesG = [
  "Given to be copied",
  "Given to be manipulated",
  "Given to be destroyed",
  "Given to be forgotten",
  "Out of failure",
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
  "#feff9c", //giallo
  "#aff5d7", //verde
  "#ffb1cb", //rosa
  "#ffffff", //bianco
];

let home;

let hero;
let heroTxt =
  // Per un nuovo ordine creativo </br></br>
  //   "I diritti non sono solo quelli riconosciuti dalla legge. Spesso ci comportiamo come se avessimo il permesso di agire in un certo modo, anche se formalmente quel diritto non esiste. La collaborazione tra più individui, anche quando involontaria, conferisce a quei comportamenti la legittimità che le autorità non gli riconoscono. Un diritto, per essere definito tale, deve essere condiviso. Di conseguenza, questi comportamenti, anche se in modo apparente arbitrari e istintivi, dal momento in cui vengono messi in atto da molti, diventano, di fatto, veri e propri diritti. Questo causa ripercussioni tangibili sul sistema che li attua e sulle leggi che li regolamentano. Le leggi non si adattano ai tempi, nello stesso modo con cui lo fanno i comportamenti. L’avvento di Internet, dei social media e dell’intelligenza artificiale hanno rivoluzionato il settore creativo, influenzando aspetti tecnici, metodologici, produttivi e identitari. Affinché la legge si evolva è necessaria una presa di posizione, ma soprattutto la consapevolezza di coloro che fanno diretta esperienza delle implicazioni che regolamentano il sistema. l nostro obiettivo non è sovvertire il sistema, bensì rivelare questi “diritti non-diritti” e le relative controversie. Ridefinire il significato di certi comportamenti considerati negativi, esaltandone gli aspetti positivi. Le persone che li attuano passano dall’essere attori colpevoli di pratiche mal viste, a paladini di una nuova costituzione. INATTO è scritta da creativi per creativi, in uno scambio aperto e orizzontale, riuscendo a dare voce a diversi attori e alle loro esigenze. La coralità di voci preserva l’integrità di ciascun punto di vista, che viene presentato in modo autentico e trasparente. I protagonisti sono persone autorevoli, con un punto di vista dato dal loro coinvolgimento nel settore. La collettività dà origine ai contenuti di INATTO, i quali vengono prodotti combinando voci e opere di diverse persone, creando un dialogo attraverso la rivista stessa. La testata del magazine è la nostra Legislazione, dove ogni volume presenta uno dei Diritti da cui è composta. Ogni numero è suddiviso in Titoli, corrispondenti alle sezioni principali, a loro volta suddivise in Capi, contenenti i diversi Articoli. Le tematiche trattate sono a sostegno del diritto in questione. Se ad uno stesso argomento sono associati più Articoli, vengono indicati come Articolo N. e Articolo N. Bis. Il Volume del 27.05.24 discute del Diritto di copiare.";
  "I diritti non sono solo quelli riconosciuti dalla legge. Spesso ci comportiamo come se avessimo il diritto di agire in un certo modo, anche se formalmente quel diritto non esiste. </br> La collaborazione tra più individui, anche quando involontaria, conferisce a quei comportamenti la legittimità che le autorità non gli riconoscono. Un diritto, per essere definito tale, deve essere condiviso. Di conseguenza, questi comportamenti apparentemente arbitrari e istintivi, dal momento in cui vengono messi in atto da molti, diventano, di fatto, veri e propri diritti. </br></br> INATTO è scritta da creativi per creativi, in uno scambio aperto e orizzontale, che dà voce a diversi attori e alle loro esigenze. La coralità di voci preserva l’integrità di ciascun punto di vista, che viene presentato in modo autentico e trasparente. I contenuti di INATTO vengono prodotti combinando voci e opere di diverse persone, creando un dialogo attraverso la rivista stessa. La testata del magazine è la nostra Legislazione, dove ogni volume presenta uno dei Diritti da cui è composta. ";

let header;
let headerE;
let headerIssue;
let headerTime;
let headerPlace;

//HOME BTN
home = document.createElement("a");
home.innerHTML = "INATTO";
home.classList.add("home");
home.href = "index.html";
document.body.appendChild(home);

//HERO
hero = document.createElement("div");
hero.innerHTML = heroTxt;
hero.classList.add("hero");
document.body.appendChild(hero);

//ISSUES
for (let i = 0; i < issuesG.length; i++) {
  iss = document.createElement("div");
  iss.classList.add("issue");
  iss.style.backgroundColor = "white";
  iss.style.backgroundImage = "url('assets/images/home/" + i + ".gif')";

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

console.log("works");
