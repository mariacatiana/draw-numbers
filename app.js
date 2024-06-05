function draw(){
    let quantity = parseInt(document.getElementById('quantity').value);
    let of = parseInt(document.getElementById('of').value);
    let until = parseInt(document.getElementById('quantity').value);
    
    let drawn = [];
    let number;

    for (let i = 0; i < quantity; i++) {
        number = getRandomNumber (of, until);
        drawn.push(number);

    }

    alert(drawn);

}

function getRandomNumber (min, max) {
    return Math.floor (Math.random() * (max - min + 1)) + min;

}
