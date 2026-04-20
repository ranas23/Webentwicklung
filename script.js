console.log('Hallo');
let box = document.getElementById('speichernButton');

speichernButton.addEventListener('click', gespeichert);

function gespeichert() {
    speichernButton.className= "eingegeben";
    const Inputbeschreibung = document.getElementById('Inputbeschreibung');
    console.log(Inputbeschreibung.value);

    console.log('Idee wurde gespeichert!');
}