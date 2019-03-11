require('../css/index.css');
const mathModule = require('../../mathFramework/basicMath/BasicMath');
const trig = require('../../mathFramework/basicMath/trigonometry/SohCahToa');
const resultAppend = require('./ui/AppendResults');
const firebaseConfig = require('./firebase/FirebaseConfig');
const $ = require('jquery');

/*
This is the main module of the application. This is also the entry point for Webpack to
compile the file into a javascript file that can be used by the Calculator.html page.
Webpack allows for full npm module support in a browser setting which this application
technically is. It is a framework that allows the app to run in a web view. Basically
allowing for writing code once and being able to deploy to various platforms.
*/

$(document).ready(function () {

    firebase.initializeApp(firebaseConfig.config);

    //Cache the event handlers so the DoM does not have to be scanned every time
    //a certain element needs to be found.
    var calculateAnswer = $("#calculateBTN").on("click", calculations);
    var operatorBtn = $(".mathButton").on("click", setMathOperation);
    var clearBtn = $("#clearBTN").on("click", clear);
    var logoutBtn = $("#gmailLogout").on("click", logout);
    var resultOutput = $("#resultTag");
    var mathOperation = "";


    //This function clears the users input and result output from the screen.
    function clear() {
        $("#valueOne").val("");
        $("#valueTwo").val("");
        resultOutput.empty();
    }

    //This logs the user out of Firebase's gmail authentication and takes them
    //back to the main login page.
    function logout() {
        alert("logout clicked");
        firebase.auth().signOut();
        document.location.href = "index.html";
    };
    
    //Any time a math operation is selected on the page this value changes and allows
    //for correct value calculation.
    function setMathOperation() {
        mathOperation = this.value;
    }

    //This function gets the two input fields from the calculations page and determines
    //which calculation to run based on the current value from the setMathOperation value.
    function calculations() {
        var valueOne = parseFloat($("#valueOne").val());
        var valueTwo = parseFloat($("#valueTwo").val());

        switch (mathOperation) {

            case "addition":
                var result = mathModule.add(valueOne, valueTwo);
                resultAppend.Output(result, mathOperation);
                alert(result);
                break;

            case "subtraction":
                var result = mathModule.subtract(valueOne, valueTwo);
                alert(result);
                resultAppend.Output(result, mathOperation);
                break;

            case "multiplication":
                var result = mathModule.multiply(valueOne, valueTwo);
                alert(result);
                resultAppend.Output(result, mathOperation);
                break;

            case "division":
                var result = mathModule.divide(valueOne, valueTwo);
                alert(result);
                resultAppend.Output(result, mathOperation);
                break;

            case "sine":
                var result = trig.sine(valueOne, valueTwo);
                alert(result);
                resultAppend.Output(result, mathOperation);
                break;

            case "cosine":
                var result = trig.cosine(valueOne, valueTwo);
                alert(result);
                resultAppend.Output(result, mathOperation);
                break;

            case "tangent":
                var result = trig.tangent(valueOne, valueTwo);
                alert(result);
                resultAppend.Output(result, mathOperation);

            default:
                alert("Please select an operation");
                break;
        }
    }

});