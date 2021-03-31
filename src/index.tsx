import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.dark.css";
import "./index.sass";
import store from "./store";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB3NOkfmoLY9j7nkwgh4rRsO3bIV9qnYM8",
    authDomain: "note-keeper-3ed3b.firebaseapp.com",
    projectId: "note-keeper-3ed3b",
    storageBucket: "note-keeper-3ed3b.appspot.com",
    messagingSenderId: "789596822738",
    appId: "1:789596822738:web:02b249a9c37344c163210b",
    measurementId: "G-JVQ3RKX96S",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
