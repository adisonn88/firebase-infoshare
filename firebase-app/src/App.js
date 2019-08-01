import React, { Component } from "react";
import "./App.css";
import Nav from "./navigation/Navigation.js";
import Content from "./Content.js";
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBo8KqsTWRv8pVozjomdleDEiZymIsS5JI",
    authDomain: "fir-48778.firebaseapp.com",
    databaseURL: "https://fir-48778.firebaseio.com",
    projectId: "fir-48778",
    storageBucket: "fir-48778.appspot.com",
    messagingSenderId: "653144365191"
};
firebase.initializeApp(config);

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Content />
            </div>
        );
    }
}

export default App;