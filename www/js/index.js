// require('../css/index.css');
const mathBasic = require('../../mathFramework/basicMath/BasicMath');
const $ = require('jquery');

$(document).ready(function () {

    var calculateAnswer = $('#calculateAnswer').on("click", myfunction);
    var mathSelector = "";

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