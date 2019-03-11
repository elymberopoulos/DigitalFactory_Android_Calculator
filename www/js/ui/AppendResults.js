/*
This module function dynamically uses javascript to append calculation results to the user's screen.
*/
const $ = require('jquery');

function Output(value, mathOperation){
    var resultOutput = $("#resultTag");
    var node = document.createElement("div");

    node.appendChild(document.createTextNode($("#valueOne").val()));
    node.appendChild(document.createElement("br"));
    node.appendChild(document.createTextNode(mathOperation.valueOf()));
    node.appendChild(document.createElement("br"));
    node.appendChild(document.createTextNode($("#valueTwo").val()));
    node.appendChild(document.createElement("br"));
    node.appendChild(document.createTextNode("Equals: "));
    node.appendChild(document.createTextNode(value));
    
    resultOutput.append(node);
}

module.exports = {
    Output
}