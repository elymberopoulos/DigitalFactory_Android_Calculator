function sine(opposite, hypotenuse){
    if(typeof opposite !== 'number' && typeof hypotenuse !== 'number'){
        alert("Please enter a number");
    }
    else{
        return opposite / hypotenuse;
    }
}

function cosine(adjacent, hypotenuse){
    if(typeof adjacent !== 'number' && typeof hypotenuse !== 'number'){
        alert("Please enter a number");
    }
    else{
        return adjacent / hypotenuse;
    }
}

function tangent(opposite, adjacent){
    if(typeof opposite !== 'number' && typeof adjacent !== 'number'){
        alert("Please enter a number");
    }
    else{
        return opposite / adjacent;
    }
}

module.exports = {
    sine,
    cosine,
    tangent
}