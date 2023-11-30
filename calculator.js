function calculateProbability() {
    const totalDraws = document.getElementById('totalDraws').value;
    const successfulDraw = document.getElementById('successfulDraw').value;
    const cardReplacement = document.getElementById('cardReplacement').value.toUpperCase();
    const selectedCard = document.getElementById('selectedCard').value;
    const deckSize = 52;
    const numOfEachCard = 4;

    
    if (cardReplacement=='YES') {
        document.getElementById('result').innerText = `The probability of drawing ${successfulDraw} ${selectedCard}'s within ${totalDraws} draws with card replacement:`;
    }
    else if (cardReplacement=='NO') {
        document.getElementById('result').innerText = `The probability of drawing ${successfulDraw} ${selectedCard}'s within ${totalDraws} draws without card replacement:`;
    }
    else {
        document.getElementById('result').innerText = `Please type either Yes or No for card replacement`
    }
}