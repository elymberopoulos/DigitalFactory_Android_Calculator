// Initialize Firebase
function firebaseInit() {
    var config = {
        apiKey: "AIzaSyC1vLsuHL_21ZDfFZeFC3HLysdPVEwPico",
        authDomain: "digitalfactory-f0ddc.firebaseapp.com",
        databaseURL: "https://digitalfactory-f0ddc.firebaseio.com",
        projectId: "digitalfactory-f0ddc",
        storageBucket: "digitalfactory-f0ddc.appspot.com",
        messagingSenderId: "301279760979"
    };
    firebase.initializeApp(config);
    
    var user = firebase.auth().currentUser;
    var googleLogin;
    var logoutBtn;
    if(document.getElementById("gmailLogin")){
        googleLogin = document.getElementById('gmailLogin').addEventListener('click', googleSignIn);
    }
    if(document.getElementById("gmailLogout")){
        logoutBtn = document.getElementById("gmailLogout").addEventListener("click", logout);
    }


    const googleProvider = new firebase.auth.GoogleAuthProvider();
    function googleSignIn() {
        console.log(googleProvider);
        return firebase.auth().signInWithRedirect(googleProvider);
    }
    function logout() {
        alert("logout clicked");
        firebase.auth().signOut();
        document.location.href = "index.html";
    };


    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            alert("Welcome " + user.displayName);
            document.location.href = "Calculator.html";
        }
    });
}
firebaseInit();


