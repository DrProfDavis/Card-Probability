function calculateProbability() {
    const totalDraws = document.getElementById('totalDraws').value;
    const successfulDraws = document.getElementById('successfulDraws').value;
    const cardReplacement = document.getElementById('cardReplacement').value.toUpperCase();
    const selectedCard = document.getElementById('selectedCard').value;
    const deckSize = 52;
    const numOfEachCard = 4;

    if (successfulDraws > 4) {
        document.getElementById('result').innerText = `You cannot have more than 4 successful draws`
    } else {
        if (totalDraws < successfulDraws) {
            document.getElementById('result').innerText = `You cannot have more successful draws than total draws`
        } else {
            if (cardReplacement=='YES') {
                document.getElementById('result').innerText = `The probability of drawing ${successfulDraws} ${selectedCard}'s within ${totalDraws} draws with card replacement:`;
            }
            else if (cardReplacement=='NO') {
                document.getElementById('result').innerText = `The probability of drawing ${successfulDraws} ${selectedCard}'s within ${totalDraws} draws without card replacement:`;
            }
            else {
                document.getElementById('result').innerText = `Please type either Yes or No for card replacement`
            }
        }
    }
}