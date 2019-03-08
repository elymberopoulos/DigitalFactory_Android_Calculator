// require('../css/index.css');
const mathBasic = require('../../mathFramework/basicMath/BasicMath');
const $ = require('jquery');

$(document).ready(function () {

    var calculateAnswer = $('#calculateAnswer').on("click", myfunction);
    var operatorBtn = $(".mathButton").on("click", setMathOperation);
    var mathOperation = "";



    function setMathOperation() {
        mathOperation = this.value;
        alert(mathOperation);
    }

    function myfunction() {
        alert('working fine');
        switch (mathSelector) {
            case "addition":

                break;

            default:
                break;
        }
    }

});