let drawValues = {};
let totalDraws = [];
let currentDrawPile = [];
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
    document.getElementById('lookingContainer').innerHTML = 'What cards are we looking for? (Do not mix suits with non-suits)';
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
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

function combinationFormula(n, r) {
    let c = (factorial(n) / (factorial(r) * factorial(n - r)))
    // console.log(c)
    return c;
}
// combinationFormula(39,2);
// Answer: 741

function calculate() {
    let math = 1;
    let calculation = 1;
    let calcDenom = 1;
    let denominator = 1;
    let calculationArray = [];
    let roundCardsArray = [];

    // TODO Must refresh page cause of this line of code
    currentDrawPile = cardChoices;

    // console.log('currentDrawPile:');
    // console.log(currentDrawPile);
    // console.log('currentDrawPile.Ace:');
    // console.log(currentDrawPile.Ace);

    // console.log('drawValues:');
    // console.log(drawValues);

    for (let i = 0; i < totalDraws; i++) {
        let n = 0;
        // console.log(drawValues[i]);
        // console.log(cardChoices.Club.cardName);
        switch (drawValues[i]) {
            case currentDrawPile.AnyCard.cardName:
                console.log('AnyCard AnyCard AnyCard');
                roundCardsArray.push(17);
                break;

            case currentDrawPile.Spade.cardName:
                console.log('Spade Spade Spade');
                spadeCount += 1;
                roundCardsArray.push(0);
                break;

            case currentDrawPile.Heart.cardName:
                console.log('Heart Heart Heart');
                heartCount += 1;
                roundCardsArray.push(1);
                break;

            case currentDrawPile.Diamond.cardName:
                console.log('Diamond Diamond Diamond');
                diamondCount += 1;
                roundCardsArray.push(2);
                break;

            case currentDrawPile.Club.cardName:
                console.log('Club Club Club');
                clubCount += 1;
                roundCardsArray.push(3);
                break;

            case currentDrawPile.Ace.cardName:
                console.log('Ace Ace Ace');
                aceCount += 1;
                roundCardsArray.push(4);
                break;

            case currentDrawPile.Two.cardName:
                console.log('Two Two Two');
                twoCount += 1;
                roundCardsArray.push(5);
                break;

            case currentDrawPile.Three.cardName:
                console.log('Three Three Three');
                threeCount += 1;
                roundCardsArray.push(6);
                break;

            case currentDrawPile.Four.cardName:
                console.log('Four Four Four');
                fourCount += 1;
                roundCardsArray.push(7);
                break;

            case currentDrawPile.Five.cardName:
                console.log('Five Five Five');
                fiveCount += 1;
                roundCardsArray.push(8);
                break;

            case currentDrawPile.Six.cardName:
                console.log('Six Six Six');
                sixCount += 1;
                roundCardsArray.push(9);
                break;

            case currentDrawPile.Seven.cardName:
                console.log('Seven Seven Seven');
                sevenCount += 1;
                roundCardsArray.push(10);
                break;

            case currentDrawPile.Eight.cardName:
                console.log('Eight Eight Eight');
                eightCount += 1;
                roundCardsArray.push(11);
                break;

            case currentDrawPile.Nine.cardName:
                console.log('Nine Nine Nine');
                nineCount += 1;
                roundCardsArray.push(12);
                break;

            case currentDrawPile.Ten.cardName:
                console.log('Ten Ten Ten');
                tenCount += 1;
                roundCardsArray.push(13);
                break;

            case currentDrawPile.Jack.cardName:
                console.log('Jack Jack Jack');
                jackCount += 1;
                roundCardsArray.push(14);
                break;

            case currentDrawPile.Queen.cardName:
                console.log('Queen Queen Queen');
                queenCount += 1;
                roundCardsArray.push(15);
                break;

            case currentDrawPile.King.cardName:
                console.log('King King King');
                kingCount += 1;
                roundCardsArray.push(16);
                break;

            default:
                console.log('IMPOSSIBLE CALCULATION')
                break;
        }
    }
    roundCardsArray.sort(function (a, b) {
        return a - b;
    });
    let finalArray = [...new Set(roundCardsArray)]
    console.log(`finalArray = ` + finalArray)
    for (let i = 0; i < finalArray.length; i++) {
        console.log(`finalArray[${i}] = ` + finalArray[i])
        switch (finalArray[i]) {
            case 0:
                math = math * spade();
                break;

            case 1:
                math = math * heart();
                break;

            case 2:
                math = math * diamond();
                break;

            default:
                break;
        }
    }

    denominator = combinationFormula(52, totalDraws)
    console.log(((math/denominator)*100).toFixed(2));


}

let anyCardCount = 0;
function anyCard() {
    currentDrawPile.AnyCard.currentN = currentDrawPile.AnyCard.currentN - 1;
    anyCardCount += 1;
}

let spadeCount = 0;
function spade() {
    let c = combinationFormula(13, spadeCount);
    return c;
}

let heartCount = 0;
function heart() {
    let c = combinationFormula(13, heartCount);
    return c;
}

let clubCount = 0;
function club() {
    let c = combinationFormula(13, clubCount);
    return c;
}

let diamondCount = 0;
function diamond() {
    let c = combinationFormula(13, diamondCount);
    return c;
}

let aceCount = 0;
function ace() {
    let c = combinationFormula(4, aceCount);
    return c;
}

let twoCount = 0;
function two() {
    let c = combinationFormula(4, twoCount);
    return c;
}

let threeCount = 0;
function three() {
    let c = combinationFormula(4, threeCount);
    return c;
}

let fourCount = 0;
function four() {
    let c = combinationFormula(4, fourCount);
    return c;
}

let fiveCount = 0;
function five() {
    let c = combinationFormula(4, fiveCount);
    return c;
}

let sixCount = 0;
function six() {
    let c = combinationFormula(4, sixCount);
    return c;
}

let sevenCount = 0;
function seven() {
    let c = combinationFormula(4, sevenCount);
    return c;
}

let eightCount = 0;
function eight() {
    let c = combinationFormula(4, eightCount);
    return c;
}

let nineCount = 0;
function nine() {
    let c = combinationFormula(4, nineCount);
    return c;
}

let tenCount = 0;
function ten() {
    let c = combinationFormula(4, tenCount);
    return c;
}

let jackCount = 0;
function jack() {
    let c = combinationFormula(4, jackCount);
    return c;
}

let queenCount = 0;
function queen() {
    let c = combinationFormula(4, queenCount);
    return c;
}

let kingCount = 0;
function king() {
    let c = combinationFormula(4, kingCount);
    return c;
}