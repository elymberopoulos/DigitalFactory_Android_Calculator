require('../css/index.css');
const mathModule = require('../../mathFramework/basicMath/BasicMath');
const trig = require('../../mathFramework/basicMath/trigonometry/SohCahToa');
const resultAppend = require('./ui/AppendResults');
const $ = require('jquery');

$(document).ready(function () {

    var calculateAnswer = $("#calculateBTN").on("click", myfunction);
    var operatorBtn = $(".mathButton").on("click", setMathOperation);
    var clearBtn = $("#clearBTN").on("click", clear);
    var resultOutput = $("#resultTag");
    // var resultInput = $("#result");

    var mathOperation = "";

    function clear() {
        $("#valueOne").val("");
        $("#valueTwo").val("");
        resultOutput.empty();
    }

    function setMathOperation() {
        mathOperation = this.value;
    }

    function myfunction() {
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
                var result = trig.sine()
                alert('sine');
                break;
            case "cosine":
                alert('cosine');
                break;
            case "tangent":
                alert('tangent');
            default:
                alert("Please select an operation");
                break;
        }
    }

});