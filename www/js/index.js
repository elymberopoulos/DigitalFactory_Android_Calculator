require('../css/index.css');
const mathModule = require('../../mathFramework/basicMath/BasicMath');
const $ = require('jquery');

$(document).ready(function () {

    var calculateAnswer = $("#calculateBTN").on("click", myfunction);
    var operatorBtn = $(".mathButton").on("click", setMathOperation);
    var mathOperation = "";



    function setMathOperation() {
        mathOperation = this.value;
    }

    function myfunction() {

        var valueOne = parseFloat($("#valueOne").val());
        var valueTwo = parseFloat($("#valueTwo").val());

        switch (mathOperation) {
            case "addition":
                var result = mathModule.add(valueOne, valueTwo);
                alert(result);
                break;
            case "subtraction":
                alert('subtraction');
                break;
            case "multiplication":
                alert('multiplication');
                break;
            case "division":
                alert('division');
                break;
            case "sine":
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