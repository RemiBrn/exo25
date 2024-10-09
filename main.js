import { Chien } from "./class/chien.js";

let chiens = [];


function updateDogSelect() {
    let dogSelect = document.getElementById('dog-select');

    dogSelect.innerHTML = `<option value="-1">Sélectionnez un chien</option>`;


    chiens.forEach((chien, index) => {
        let option = document.createElement('option');
        option.value = index;
        option.textContent = chien.nom;
        dogSelect.appendChild(option);
    });
}


let btnSubmit = document.getElementById("btn-submit");
btnSubmit.addEventListener('click', function (event) {
    event.preventDefault();

    let nom = document.getElementById("dog-name").value;
    let age = document.getElementById("dog-age").value;
    let race = document.getElementById("dog-breed").value;

    let nouveauChien = new Chien(nom, age, race);

    console.log("Nouveau chien ajouté :", nouveauChien); //test
    chiens.push(nouveauChien);
    console.log("Liste des chiens :", chiens); // test

    updateDogSelect();
});

function displayDogDetails(chien) {
    let output = `
        <p class="text-white"><strong>ID :</strong> ${chien.id}</p> 
        <p class="text-white"><strong>Nom :</strong> ${chien.nom}</p>
        <p class="text-white"><strong>Âge :</strong> ${chien.age} ans</p>
        <p class="text-white"><strong>Race :</strong> ${chien.race}</p>
    `;
    document.getElementById('selectOutput').innerHTML = output;
}

let dogSelect = document.getElementById("dog-select");
dogSelect.addEventListener("change", function () {
    let selectedIndex = dogSelect.value;

    if (selectedIndex != "-1") {
        let selectedChien = chiens[selectedIndex];
        displayDogDetails(selectedChien);
    } else {
        document.getElementById('selectOutput').innerHTML = "";
    }
});








