let drawValues = [];                    
const cardChoices = {
    0: 'Choose Card',
    1: { name: 'Any Card', originalN: 52 },
    2: { name: 'Spades', originalN: 13 },
    3: { name: 'Hearts', originalN: 13 },
    4: { name: 'Diamonds', originalN: 13 },
    5: { name: 'Clubs', originalN: 13 },
    6: { name: 'Ace', originalN: 4 },
    7: { name: 'Two', originalN: 4 },
    8: { name: 'Three', originalN: 4 },
    9: { name: 'Four', originalN: 4 },
    10: { name: 'Five', originalN: 4 },
    11: { name: 'Six', originalN: 4 },
    12: { name: 'Seven', originalN: 4 },
    13: { name: 'Eight', originalN: 4 },
    14: { name: 'Nine', originalN: 4 },
    15: { name: 'Ten', originalN: 4 },
    16: { name: 'Jack', originalN: 4 },
    17: { name: 'Queen', originalN: 4 },
    18: { name: 'King', originalN: 4 }
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

            for (let j = 0; j <= 18; j++) {
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
    let c = (factorial(n) / (factorial(r) * factorial(n - r)))
    console.log(c);
}
// combinationFormula(39,2);
// Answer: 741

function calculate() {
    console.log('Saved draw Values:', drawValues);
    console.log(drawValues[0]);
}