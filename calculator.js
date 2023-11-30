function calculateProbability() {
    const totalDraws = document.getElementById('totalDraws').value;
    const successfulDraws = document.getElementById('successfulDraws').value;
    const cardReplacement = document.getElementById('cardReplacement').value.toUpperCase();
    const selectedCard = document.getElementById('selectedCard').value.toUpperCase();
    const deckSize = 52;

    if (selectedCard == 'SPADES' || 'HEARTS' || 'CLUBS' || 'DIAMONDS' || 'SPADE' || 'HEART' || 'CLUB' || 'DIAMOND') {
        let num = 13
        if (successfulDraws > 4) {
            document.getElementById('result').innerText = `You cannot have more than 4 successful draws`
        } else {
            if (totalDraws < successfulDraws) {
                document.getElementById('result').innerText = `You cannot have more successful draws than total draws`
            } else {
                if (cardReplacement == 'NO') {
                    if (totalDraws > 6) {
                        document.getElementById('result').innerText = `Please only have 6 or fewer total draws`
                    } else {
                        document.getElementById('result').innerText = `The probability of drawing ${successfulDraws} ${selectedCard}(s) in ${totalDraws} draw(s) without card replacement:`;
                        if (totalDraws == 1) {
                            document.getElementById('stats').innerText = `(${num}/${deckSize}) = ` + (num / deckSize);
                        } else if (totalDraws == 2) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize-num}/${deckSize-1}) = ` + (num / deckSize)*((deckSize-num)/(deckSize-1));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1));
                            }
                        } else if (totalDraws == 3) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize-num}/${deckSize-1})*(${deckSize-num-1}/${deckSize-2}) = ` + (num / deckSize)*((deckSize-num)/(deckSize-1))*((deckSize-num-1)/(deckSize-2));
                            }
                        }
                    }
                }
                else if (cardReplacement == 'YES') {
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