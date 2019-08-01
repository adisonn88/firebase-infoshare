// Referencja do autoryzacji
var auth = firebase.auth();

//Referencja do tytułu strony
var hello = document.getElementById('hello');

//Tworzymy użytkownika
function signUp(email, pass) {
    auth.createUserWithEmailAndPassword(email, pass).then(function(){
        alert('zarejestrowano pomyślnie')
    }).catch(function(e) {
        alert('Błąd: '+ e.message)
    })
}

// Logujemy się
function signIn(email, pass) {
    auth.signInWithEmailAndPassword(email, pass).then(function(){
        alert('zarejestrowano pomyślnie')
    }).catch(function(e) {
        alert('Błąd: '+ e.message)
    })
}

//Wylogowujemy się
function signOut() {
    auth.signOut().then(function(){
        alert('Wylogowano pomyślnie')
    }).catch(function(e) {
        alert('Błąd: '+ e.message)
    })
}

//Sprawdzamy czy użytkownik jest zalogowany
function isLoggedIn() {
    return !!auth.currentUser
}

function getUserData() {
    return auth.currentUser
}


//Reagujemy na zmianę autoryzacji
auth.onAuthStateChanged(function(user) {
        if(user) {
            hello.innerText = 'Hello '+ user.email
        }else {
            hello.innerText = 'Zaloguj się'
        }
});


// *************** Obsługa formualrza

//Referencja do elementów formualrza
var form = document.getElementById('form');
var submitButton = document.getElementById('submit-btn');
var signOutButton = document.getElementById('signout');
var textInput = document.getElementById('text-input');
var passInput = document.getElementById('pass-input');

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    signIn(textInput.value, passInput.value);
});

signOutButton.addEventListener('click', function(event){
    signOut();
});