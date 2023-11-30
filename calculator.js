function calculateProbability() {
    const totalDraws = document.getElementById('totalDraws').value;
    const successfulDraws = document.getElementById('successfulDraws').value;
    const cardReplacement = document.getElementById('cardReplacement').value.toUpperCase();
    const selectedCard = document.getElementById('selectedCard').value.toUpperCase();
    const deckSize = 52;

    if (selectedCard=='SPADES'||'HEARTS'||'CLUBS'||'DIAMONDS') {
        let num = 13
        if (successfulDraws > 4) {
            document.getElementById('result').innerText = `You cannot have more than 4 successful draws`
        } else {
            if (totalDraws < successfulDraws) {
                document.getElementById('result').innerText = `You cannot have more successful draws than total draws`
            } else {
                if (cardReplacement=='YES') {
                    if (totalDraws > 6) {
                        document.getElementById('result').innerText = `Please only have 6 or fewer total draws`
                    } else {
                        document.getElementById('result').innerText = `The probability of drawing ${successfulDraws} ${selectedCard} in ${totalDraws} draw with card replacement:`;
                        if (successfulDraws==1) {
                            if (totalDraws==1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize}) = ` + (num/deckSize);
                            }
                        }
                    }
                }
                else if (cardReplacement=='NO') {
                    // document.getElementById('result').innerText = `The probability of drawing ${successfulDraws} ${selectedCard}'s within ${totalDraws} draws without card replacement:`;
                }
                else {
                    document.getElementById('result').innerText = `Please type either Yes or No for card replacement`
                }
            }
        }
    } else {
        let num = 4

    }
}