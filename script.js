console.log("Hallo");

const speichernButton = document.getElementById("speichernButton");
const inputTitel = document.getElementById("InputTitel");
const inputKategorie = document.getElementById("InputKategorie");
const inputStatus = document.getElementById("InputStatus");
const inputBewertung = document.getElementById("InputBewertung");
const inputBeschreibung = document.getElementById("Inputbeschreibung");
const gespeicherteIdeenBox = document.getElementById("gespeicherteIdeen");

let ideen = [];
let bearbeiteIndex = -1;

speichernButton.addEventListener("click", speichereIdee);

ladeIdeen();
zeigeIdeen();

function speichereIdee() {
    if (inputTitel.value === "" || inputBeschreibung.value === "") {
        console.log("Bitte Titel und Beschreibung ausfüllen.");
        return;
    }

    let neueIdee = {
        titel: inputTitel.value,
        kategorie: inputKategorie.value,
        status: inputStatus.value,
        bewertung: inputBewertung.value,
        beschreibung: inputBeschreibung.value
    };

    if (bearbeiteIndex === -1) {
        ideen.push(neueIdee);
    } else {
        ideen[bearbeiteIndex] = neueIdee;
    }

    speichereIdeenImBrowser();
    zeigeIdeen();
    leereFormular();

    bearbeiteIndex = -1;
    speichernButton.textContent = "Idee speichern";
    speichernButton.className = "eingegeben";

    console.log("Idee wurde gespeichert.");
    console.log(ideen);
}

function zeigeIdeen() {
    let htmlText = "";

    for (let i = 0; i < ideen.length; i++) {
        htmlText += '<article class="idea-card">';
        htmlText += '<div class="card-top">';
        htmlText += '<span class="tag">' + ideen[i].kategorie + '</span>';
        htmlText += '<span class="rating">' + ideen[i].bewertung + '</span>';
        htmlText += '</div>';
        htmlText += '<h3>' + ideen[i].titel + '</h3>';
        htmlText += '<p>' + ideen[i].beschreibung + '</p>';
        htmlText += '<div class="card-meta">';
        htmlText += '<span>' + ideen[i].status + '</span>';
        htmlText += '<span>Gespeichert</span>';
        htmlText += '</div>';
        htmlText += '<div class="card-actions">';
        htmlText += '<button type="button" class="button-secondary card-button" id="bearbeiten' + i + '">Bearbeiten</button>';
        htmlText += '</div>';
        htmlText += '</article>';
    }

    gespeicherteIdeenBox.innerHTML = htmlText;

    for (let i = 0; i < ideen.length; i++) {
        let button = document.getElementById("bearbeiten" + i);
        button.addEventListener("click", function () {
            bearbeiteIdee(i);
        });
    }
}

function bearbeiteIdee(index) {
    bearbeiteIndex = index;

    inputTitel.value = ideen[index].titel;
    inputKategorie.value = ideen[index].kategorie;
    inputStatus.value = ideen[index].status;
    inputBewertung.value = ideen[index].bewertung;
    inputBeschreibung.value = ideen[index].beschreibung;

    speichernButton.textContent = "Idee aktualisieren";
    speichernButton.className = "button-primary";
}

function speichereIdeenImBrowser() {
    let ideenAlsText = JSON.stringify(ideen);
    localStorage.setItem("ideen", ideenAlsText);
}

function ladeIdeen() {
    let gespeicherteIdeen = localStorage.getItem("ideen");

    if (gespeicherteIdeen !== null) {
        ideen = JSON.parse(gespeicherteIdeen);
    }
}

function leereFormular() {
    inputTitel.value = "";
    inputKategorie.value = "TikTok";
    inputStatus.value = "Idee";
    inputBewertung.value = "";
    inputBeschreibung.value = "";
}