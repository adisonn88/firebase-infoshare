// Element tablicy w drzewie DOM
var tableBody = document.querySelector('#table tbody');

// Referencja do bazy danych
var database = firebase.database();


// Czyścimy tablice z danych
function clearTable() {
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
}

// Odczytujemy dane z bazy
function getPeople() {

}

// Dodajemy dane do bazy
function addPerson(name, surname, age) {

}


// Edytujemy dane
function editPerson(personId, name, surname, age) {

}

// Usuwamy dane
function removePerson(personId) {

}


// *************** Obsługa przycisków

var submitAddPersonButton = document.getElementById('add-person-submit-btn');
var editAddPersonButton = document.getElementById('edit-person-submit-btn');
var nameInput = document.getElementById('name-input');
var surnameInput = document.getElementById('surname-input');
var ageInput = document.getElementById('age-input');
