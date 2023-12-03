let drawValues = [];
const cardChoices = {
    0: 'Choose Card',
    1: 'Any Card',
    2: 'Spades',
    3: 'Hearts',
    4: 'Diamonds',
    5: 'Clubs',
    6: 'Ace',
    7: 'Two',
    8: 'Three',
    9: 'Four',
    10: 'Five',
    11: 'Six',
    12: 'Seven',
    13: 'Eight',
    14: 'Nine',
    15: 'Ten',
    16: 'Jack',
    17: 'Queen',
    18: 'King'
}

function generateDraws() {
    document.getElementById('lookingContainer').innerHTML = 'What cards are we looking for?';
    document.getElementById('drawContainer').innerHTML = '';
    drawValues = [];

    const num = parseInt(document.getElementById('numInput').value);

    if (!isNaN(num) && num > 0 && num < 53) {
        for (let i = 1; i <= num; i++) {
            const draw = document.createElement('select');
            draw.name = `draw${i}`;
            draw.id = `draw${i}`;

            for (let j = 0; j <= 17; j++) {
                const option = document.createElement('option');
                option.value = `${cardChoices[j]}`;
                option.text = `${cardChoices[j]}`;
                draw.appendChild(option);
            }

            draw.addEventListener('change', function () {
                drawValues[i - 1] = this.value;
            });

            document.getElementById('drawContainer').appendChild(draw);
        }
        document.getElementById('calculateButton').style.display = 'inline-block';
    } else {
        alert('Please enter a valid positive number.');
    }
}

function setAllDraws() {
    const firstdraw = document.getElementById('draw1');
    const selectedValue = firstdraw.options[firstdraw.selectedIndex].value;

    const num = parseInt(document.getElementById('numInput').value);
    for (let i = 2; i <= num; i++) {
        const draw = document.getElementById(`draw${i}`);
        draw.value = selectedValue;

        drawValues[i - 1] = selectedValue;
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function combinationFormula(n, r) {
    let c = (factorial(n)/(factorial(r)*factorial(n-r)))
    console.log(c);
}
// combinationFormula(39,2);
// Answer: 741

function calculate() {
    console.log('Saved draw Values:', drawValues);
    console.log(drawValues[0]);
}