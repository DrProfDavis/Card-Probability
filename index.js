let drawValues = {};
let totalDraws = [];
const cardChoices = {
    ChooseCard: { cardName: 'Choose a Card', originalN: 0, currentN: 0, currentS: 0, currentH: 0, currentD: 0, currentD: 0 },
    AnyCard: { cardName: 'Any Card', originalN: 52, currentN: 52 },
    Spade: { cardName: 'Spade', originalN: 13, currentN: 13 },
    Heart: { cardName: 'Heart', originalN: 13, currentN: 13 },
    Diamond: { cardName: 'Diamond', originalN: 13, currentN: 13 },
    Club: { cardName: 'Club', originalN: 13, currentN: 13 },
    Ace: { cardName: 'Ace', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1 },
    Two: { cardName: 'Two', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1 },
    Three: { cardName: 'Three', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1 },
    Four: { cardName: 'Four', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1 },
    Five: { cardName: 'Five', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1 },
    Six: { cardName: 'Six', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1 },
    Seven: { cardName: 'Seven', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1 },
    Eight: { cardName: 'Eight', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1 },
    Nine: { cardName: 'Nine', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1 },
    Ten: { cardName: 'Ten', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1 },
    Jack: { cardName: 'Jack', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1 },
    Queen: { cardName: 'Queen', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1 },
    King: { cardName: 'King', originalN: 4, currentN: 4, currentS: 1, currentH: 1, currentD: 1 }
};

const cardChoicesArray = Object.values(cardChoices);

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
                let rip = cardChoicesArray[j];
                option.value = `${rip.cardName}`;
                option.text = `${rip.cardName}`;
                draw.appendChild(option);
                // console.log(rip);
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
    // let currentDrawPile = Object.values(cardChoices);

    // console.log('currentDrawPile:');
    // console.log(currentDrawPile);
    // console.log('currentDrawPile[2]:');
    // console.log(currentDrawPile[2]);

    console.log('drawValues:');
    console.log(drawValues);

    for (let i = 0; i < totalDraws; i++) {
        // console.log(drawValues[i]);
        // console.log(cardChoices.Club.cardName);
        switch (drawValues[i]) {
            case cardChoices.AnyCard.cardName:
                console.log('AnyCard AnyCard AnyCard');
                break;

            case cardChoices.Spade.cardName:
                console.log('Spade Spade Spade');
                break;

            case cardChoices.Heart.cardName:
                console.log('Heart Heart Heart');
                break;

            case cardChoices.Diamond.cardName:
                console.log('Diamond Diamond Diamond');
                break;

            case cardChoices.Club.cardName:
                console.log('Club Club Club');
                break;

            case cardChoices.Ace.cardName:
                console.log('Ace Ace Ace');
                break;

            case cardChoices.Two.cardName:
                console.log('Two Two Two');
                break;

            case cardChoices.Three.cardName:
                console.log('Three Three Three');
                break;

            case cardChoices.Four.cardName:
                console.log('Four Four Four');
                break;

            case cardChoices.Five.cardName:
                console.log('Five Five Five');
                break;

            case cardChoices.Six.cardName:
                console.log('Six Six Six');
                break;

            case cardChoices.Seven.cardName:
                console.log('Seven Seven Seven');
                break;

            case cardChoices.Eight.cardName:
                console.log('Eight Eight Eight');
                break;

            case cardChoices.Nine.cardName:
                console.log('Nine Nine Nine');
                break;

            case cardChoices.Ten.cardName:
                console.log('Ten Ten Ten');
                break;

            case cardChoices.Jack.cardName:
                console.log('Jack Jack Jack');
                break;

            case cardChoices.Queen.cardName:
                console.log('Queen Queen Queen');
                break;

            case cardChoices.King.cardName:
                console.log('King King King');
                break;

            default:
                console.log('IMPOSSIBLE CALCULATION')
                break;
        }
    }
}