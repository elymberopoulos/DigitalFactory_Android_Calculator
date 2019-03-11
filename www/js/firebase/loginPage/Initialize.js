/*
Firebase is a Google API that allows for easy storage of data and user authentication.
*/

function firebaseInit() {

    //config key so the application can connect to the correct project on Firebase.
    //This key would not normally be pushed to github but this app is only a demo.
    var config = {
        apiKey: "AIzaSyC1vLsuHL_21ZDfFZeFC3HLysdPVEwPico",
        authDomain: "digitalfactory-f0ddc.firebaseapp.com",
        databaseURL: "https://digitalfactory-f0ddc.firebaseio.com",
        projectId: "digitalfactory-f0ddc",
        storageBucket: "digitalfactory-f0ddc.appspot.com",
        messagingSenderId: "301279760979"
    };

    //Firebase is initialized and various event handlers and functions are set up to handle logging in
    //via a Google auth provider object.
    firebase.initializeApp(config);
    var user = firebase.auth().currentUser;
    var googleLogin = document.getElementById('gmailLogin').addEventListener('click', googleSignIn);
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    function googleSignIn() {
        console.log(googleProvider);
        return firebase.auth().signInWithRedirect(googleProvider);
    }

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            alert("Welcome " + user.displayName);
            document.location.href = "Calculator.html";
        }
    });
}


