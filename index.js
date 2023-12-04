let drawValues = {};
let totalDraws = [];
const cardChoices = {
    0: { cardName: 'Choose Card', originalN: 0, currentN: 0, currentS: 0, currentH: 0, currentD: 0, currentD: 0 },
    1: { cardName: 'Any Card', originalN: 52, currentN: 52 },
    2: { cardName: 'Spade', originalN: 13, currentN: 13 },
    3: { cardName: 'Heart', originalN: 13, currentN: 13 },
    4: { cardName: 'Diamond', originalN: 13, currentN: 13 },
    5: { cardName: 'Club', originalN: 13, currentN: 13 },
    6: { cardName: 'Ace', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1, currentD: 1},
    7: { cardName: 'Two', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1, currentD: 1 },
    8: { cardName: 'Three', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1, currentD: 1 },
    9: { cardName: 'Four', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1, currentD: 1 },
    10: { cardName: 'Five', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1, currentD: 1 },
    11: { cardName: 'Six', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1, currentD: 1 },
    12: { cardName: 'Seven', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1, currentD: 1 },
    13: { cardName: 'Eight', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1, currentD: 1 },
    14: { cardName: 'Nine', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1, currentD: 1 },
    15: { cardName: 'Ten', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1, currentD: 1 },
    16: { cardName: 'Jack', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1, currentD: 1 },
    17: { cardName: 'Queen', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1, currentD: 1 },
    18: { cardName: 'King', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1, currentD: 1 }
}

function generateDraws() {
    document.getElementById('lookingContainer').innerHTML = 'What cards are we looking for?';
    document.getElementById('drawContainer').innerHTML = '';
    drawValues = [];

    totalDraws = parseInt(document.getElementById('numInput').value);

    if (!isNaN(totalDraws) && totalDraws > 0 && totalDraws < 53) {
        for (let i = 1; i <= totalDraws; i++) {
            const draw = document.createElement('select');
            draw.cardName = `draw${i}`;
            draw.id = `draw${i}`;

            for (let j = 0; j <= 18; j++) {
                const option = document.createElement('option');
                // let raw = String.raw``
                option.value = cardChoices[j].cardName;
                option.text = `${cardChoices[j].cardName}`;
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

    const totalDraws = parseInt(document.getElementById('numInput').value);
    for (let i = 2; i <= totalDraws; i++) {
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
    let c = (factorial(n) / (factorial(r) * factorial(n - r)))
    console.log(c);
}
// combinationFormula(39,2);
// Answer: 741

function calculate() {
    let currentDrawPile = cardChoices;
    console.log(currentDrawPile); 

    console.log('drawValues:');
    console.log('-----------------');

    for (let i = 0; i < totalDraws; i++) {
        let card = drawValues[i];
        console.log(card);
        console.log(currentDrawPile[i]);
    }
}