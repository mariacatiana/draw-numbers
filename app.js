function draw(){
    let quantity = parseInt(document.getElementById('quantity').value);
    let of = parseInt(document.getElementById('of').value);
    let until = parseInt(document.getElementById('quantity').value);
    
    let drawn = [];
    let number;

    for (let i = 0; i < quantity; i++) {
        number = getRandomNumber (of, until);

        while (drawn.includes(number)) {
            number = getRandomNumber( of, until)
        }

        drawn.push(number);
    }

    let result = document.getElementById('result');
    result.innerHTML = `<label class="paragraph__text">Numbers drawn: ${drawn}</label>`;

}

function getRandomNumber (min, max) {
    return Math.floor (Math.random() * (max - min + 1)) + min;

}
