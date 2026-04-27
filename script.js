console.log('Hallo');
let box = document.getElementById('speichernButton');

speichernButton.addEventListener('click', gespeichert);


let idee = []

getData();

function gespeichert() {
    speichernButton.className= "eingegeben";

    const InputTitel = document.getElementById('InputTitel');
    const InputKategorie = document.getElementById('InputKategorie');
    const InputStatus = document.getElementById('InputStatus');
    const InputBewertung = document.getElementById('InputBewertung');
    const Inputbeschreibung = document.getElementById('Inputbeschreibung');


    idee.push({
Titel: InputTitel.value, 
Kategorie: InputKategorie.value,
Status: InputStatus.value,
Bewertung: InputBewertung.value,
Beschreibung: Inputbeschreibung.value,
})

storeData();
console.log(idee)
    console.log('Idee wurde gespeichert!');
 
InputTitel.value = "";
InputKategorie.value = "";
InputStatus.value = "";
InputBewertung.value= "";
Inputbeschreibung.value= "";
}
let neueIdee = document.getElementById('idea-form');



console.log(idee)


function storeData() {

    let jsonPosts = JSON.stringify(idee);
    console.log(jsonPosts);
    localStorage.setItem("idee", jsonPosts);

}

function getData() {

let gespeicherteDaten = localStorage.getItem("idee");
idee = JSON.parse(gespeicherteDaten); 
console.log(gespeicherteDaten); 
console.log(idee); 
}