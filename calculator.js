function calculateProbability() {
    const totalDraws = document.getElementById('totalDraws').value;
    const successfulDraws = document.getElementById('successfulDraws').value;
    const exactDraws = document.getElementById('exactDraws').value;
    const cardReplacement = document.getElementById('cardReplacement').value.toUpperCase();
    const selectedCard = document.getElementById('selectedCard').value.toUpperCase();
    const deckSize = 52;
    var num = 0;
    const suits = ['SPADES', 'HEARTS', 'CLUBS', 'DIAMONDS', 'SPADE', 'HEART', 'CLUB', 'DIAMOND']
    const cards = ['A', 'ACE', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'JACK', 'Q', 'QUEEN', 'K', 'KING']

    if (suits.includes(selectedCard)) {
        num = 13
        if (successfulDraws > 4) {
            document.getElementById('result').innerText = `You cannot have more than 4 successful draws`
            document.getElementById('stats').innerText = ``
        } else {
            if (totalDraws < successfulDraws) {
                document.getElementById('result').innerText = `You cannot have more successful draws than total draws`
                document.getElementById('stats').innerText = ``
            } else {
                if (cardReplacement == 'NO') {
                    if (totalDraws > 6) {
                        document.getElementById('result').innerText = `Please only have 6 or fewer total draws`
                        document.getElementById('stats').innerText = ``
                    } else {
                        document.getElementById('result').innerText = `The probability of drawing exactly ${successfulDraws} ${selectedCard}(s) in ${totalDraws} draw(s) without card replacement:`;
                        if (totalDraws == 1) {
                            document.getElementById('stats').innerText = `(${num}/${deckSize}) = ` + (num / deckSize);
                        } else if (totalDraws == 2) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1));
                            }
                        } else if (totalDraws == 3) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1})*(${deckSize - num - 1}/${deckSize - 2}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1)) * ((deckSize - num - 1) / (deckSize - 2));
                            } else if (successfulDraws == 2) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${deckSize - num}/${deckSize - 2}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((deckSize - num) / (deckSize - 2));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2));
                            }
                        } else if (totalDraws == 4) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1})*(${deckSize - num - 1}/${deckSize - 2})*(${deckSize - num - 2}/${deckSize - 3}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1)) * ((deckSize - num - 1) / (deckSize - 2)) * ((deckSize - num - 2) / (deckSize - 3));
                            } else if (successfulDraws == 2) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${deckSize - num}/${deckSize - 2})*(${deckSize - num - 1}/${deckSize - 3}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((deckSize - num) / (deckSize - 2)) * ((deckSize - num - 1) / (deckSize - 3));
                            } else if (successfulDraws == 3) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${deckSize - num}/${deckSize - 3}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((deckSize - num) / (deckSize - 3));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${num - 3}/${deckSize - 3}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((num - 3) / (deckSize - 3));
                            }
                        } else if (totalDraws == 5) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1})*(${deckSize - num - 1}/${deckSize - 2})*(${deckSize - num - 2}/${deckSize - 3})*(${deckSize - num - 3}/${deckSize - 4}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1)) * ((deckSize - num - 1) / (deckSize - 2)) * ((deckSize - num - 2) / (deckSize - 3)) * ((deckSize - num - 3) / (deckSize - 4));
                            } else if (successfulDraws == 2) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${deckSize - num}/${deckSize - 2})*(${deckSize - num - 1}/${deckSize - 3})*(${deckSize - num - 2}/${deckSize - 4}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((deckSize - num) / (deckSize - 2)) * ((deckSize - num - 1) / (deckSize - 3)) * ((deckSize - num - 2) / (deckSize - 4));
                            } else if (successfulDraws == 3) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${deckSize - num}/${deckSize - 3})*(${deckSize - num - 1}/${deckSize - 4}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((deckSize - num) / (deckSize - 3)) * ((deckSize - num - 1) / (deckSize - 4));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${num - 3}/${deckSize - 3})*(${deckSize - num}/${deckSize - 4}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((num - 3) / (deckSize - 3)) * ((deckSize - num) / (deckSize - 4));
                            }
                        } else if (totalDraws == 6) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1})*(${deckSize - num - 1}/${deckSize - 2})*(${deckSize - num - 2}/${deckSize - 3})*(${deckSize - num - 3}/${deckSize - 4})*(${deckSize - num - 4}/${deckSize - 5}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1)) * ((deckSize - num - 1) / (deckSize - 2)) * ((deckSize - num - 2) / (deckSize - 3)) * ((deckSize - num - 3) / (deckSize - 4)) * ((deckSize - num - 4) / (deckSize - 5));
                            } else if (successfulDraws == 2) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${deckSize - num}/${deckSize - 2})*(${deckSize - num - 1}/${deckSize - 3})*(${deckSize - num - 2}/${deckSize - 4})*(${deckSize - num - 3}/${deckSize - 5}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((deckSize - num) / (deckSize - 2)) * ((deckSize - num - 1) / (deckSize - 3)) * ((deckSize - num - 2) / (deckSize - 4)) * ((deckSize - num - 3) / (deckSize - 5));
                            } else if (successfulDraws == 3) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${deckSize - num}/${deckSize - 3})*(${deckSize - num - 1}/${deckSize - 4})*(${deckSize - num - 2}/${deckSize - 5}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((deckSize - num) / (deckSize - 3)) * ((deckSize - num - 1) / (deckSize - 4)) * ((deckSize - num - 2) / (deckSize - 5));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${num - 3}/${deckSize - 3})*(${deckSize - num}/${deckSize - 4})*(${deckSize - num - 1}/${deckSize - 5}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((num - 3) / (deckSize - 3)) * ((deckSize - num) / (deckSize - 4)) * ((deckSize - num - 1) / (deckSize - 5));
                            }
                        }
                    }
                }
                else if (cardReplacement == 'YES') {
                    if (totalDraws > 6) {
                        document.getElementById('result').innerText = `Please only have 6 or fewer total draws`
                        document.getElementById('stats').innerText = ``
                    } else {
                        document.getElementById('result').innerText = `The probability of drawing exactly ${successfulDraws} ${selectedCard}(s) in ${totalDraws} draw(s) with card replacement:`;
                        if (totalDraws == 1) {
                            document.getElementById('stats').innerText = `(${num}/${deckSize}) = ` + (num / deckSize);
                        } else if (totalDraws == 2) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize));
                            }
                        } else if (totalDraws == 3) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 2) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize));
                            }
                        } else if (totalDraws == 4) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 2) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 3) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((num) / (deckSize));
                            }
                        } else if (totalDraws == 5) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 2) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 3) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            }
                        } else if (totalDraws == 6) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 2) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 3) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            }
                        }
                    }
                }
                else {
                    document.getElementById('result').innerText = `Please type either Yes or No for card replacement`
                }
            }
        }
    } else if (cards.includes(selectedCard)) {
        num = 4
        if (successfulDraws > 4) {
            document.getElementById('result').innerText = `You cannot have more than 4 successful draws`
            document.getElementById('stats').innerText = ``
        } else {
            if (totalDraws < successfulDraws) {
                document.getElementById('result').innerText = `You cannot have more successful draws than total draws`
                document.getElementById('stats').innerText = ``
            } else {
                if (cardReplacement == 'NO') {
                    if (totalDraws > 6) {
                        document.getElementById('result').innerText = `Please only have 6 or fewer total draws`
                        document.getElementById('stats').innerText = ``
                    } else {
                        document.getElementById('result').innerText = `The probability of drawing exactly ${successfulDraws} ${selectedCard}(s) in ${totalDraws} draw(s) without card replacement:`;
                        if (totalDraws == 1) {
                            document.getElementById('stats').innerText = `(${num}/${deckSize}) = ` + (num / deckSize);
                        } else if (totalDraws == 2) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1));
                            }
                        } else if (totalDraws == 3) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1})*(${deckSize - num - 1}/${deckSize - 2}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1)) * ((deckSize - num - 1) / (deckSize - 2));
                            } else if (successfulDraws == 2) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${deckSize - num}/${deckSize - 2}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((deckSize - num) / (deckSize - 2));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2));
                            }
                        } else if (totalDraws == 4) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1})*(${deckSize - num - 1}/${deckSize - 2})*(${deckSize - num - 2}/${deckSize - 3}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1)) * ((deckSize - num - 1) / (deckSize - 2)) * ((deckSize - num - 2) / (deckSize - 3));
                            } else if (successfulDraws == 2) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${deckSize - num}/${deckSize - 2})*(${deckSize - num - 1}/${deckSize - 3}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((deckSize - num) / (deckSize - 2)) * ((deckSize - num - 1) / (deckSize - 3));
                            } else if (successfulDraws == 3) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${deckSize - num}/${deckSize - 3}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((deckSize - num) / (deckSize - 3));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${num - 3}/${deckSize - 3}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((num - 3) / (deckSize - 3));
                            }
                        } else if (totalDraws == 5) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1})*(${deckSize - num - 1}/${deckSize - 2})*(${deckSize - num - 2}/${deckSize - 3})*(${deckSize - num - 3}/${deckSize - 4}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1)) * ((deckSize - num - 1) / (deckSize - 2)) * ((deckSize - num - 2) / (deckSize - 3)) * ((deckSize - num - 3) / (deckSize - 4));
                            } else if (successfulDraws == 2) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${deckSize - num}/${deckSize - 2})*(${deckSize - num - 1}/${deckSize - 3})*(${deckSize - num - 2}/${deckSize - 4}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((deckSize - num) / (deckSize - 2)) * ((deckSize - num - 1) / (deckSize - 3)) * ((deckSize - num - 2) / (deckSize - 4));
                            } else if (successfulDraws == 3) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${deckSize - num}/${deckSize - 3})*(${deckSize - num - 1}/${deckSize - 4}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((deckSize - num) / (deckSize - 3)) * ((deckSize - num - 1) / (deckSize - 4));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${num - 3}/${deckSize - 3})*(${deckSize - num}/${deckSize - 4}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((num - 3) / (deckSize - 3)) * ((deckSize - num) / (deckSize - 4));
                            }
                        } else {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1})*(${deckSize - num - 1}/${deckSize - 2})*(${deckSize - num - 2}/${deckSize - 3})*(${deckSize - num - 3}/${deckSize - 4})*(${deckSize - num - 4}/${deckSize - 5}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1)) * ((deckSize - num - 1) / (deckSize - 2)) * ((deckSize - num - 2) / (deckSize - 3)) * ((deckSize - num - 3) / (deckSize - 4)) * ((deckSize - num - 4) / (deckSize - 5));
                            } else if (successfulDraws == 2) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${deckSize - num}/${deckSize - 2})*(${deckSize - num - 1}/${deckSize - 3})*(${deckSize - num - 2}/${deckSize - 4})*(${deckSize - num - 3}/${deckSize - 5}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((deckSize - num) / (deckSize - 2)) * ((deckSize - num - 1) / (deckSize - 3)) * ((deckSize - num - 2) / (deckSize - 4)) * ((deckSize - num - 3) / (deckSize - 5));
                            } else if (successfulDraws == 3) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${deckSize - num}/${deckSize - 3})*(${deckSize - num - 1}/${deckSize - 4})*(${deckSize - num - 2}/${deckSize - 5}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((deckSize - num) / (deckSize - 3)) * ((deckSize - num - 1) / (deckSize - 4)) * ((deckSize - num - 2) / (deckSize - 5));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${num - 3}/${deckSize - 3})*(${deckSize - num}/${deckSize - 4})*(${deckSize - num - 1}/${deckSize - 5}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((num - 3) / (deckSize - 3)) * ((deckSize - num) / (deckSize - 4)) * ((deckSize - num - 1) / (deckSize - 5));
                            }
                        }
                    }
                }
                else if (cardReplacement == 'YES') {
                    if (totalDraws > 6) {
                        document.getElementById('result').innerText = `Please only have 6 or fewer total draws`
                        document.getElementById('stats').innerText = ``
                    } else {
                        document.getElementById('result').innerText = `The probability of drawing exactly ${successfulDraws} ${selectedCard}(s) in ${totalDraws} draw(s) with card replacement:`;
                        if (totalDraws == 1) {
                            document.getElementById('stats').innerText = `(${num}/${deckSize}) = ` + (num / deckSize);
                        } else if (totalDraws == 2) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize));
                            }
                        } else if (totalDraws == 3) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 2) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize));
                            }
                        } else if (totalDraws == 4) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 2) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 3) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((num) / (deckSize));
                            }
                        } else if (totalDraws == 5) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 2) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 3) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            }
                        } else if (totalDraws == 6) {
                            if (successfulDraws == 1) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 2) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 3) {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else {
                                document.getElementById('stats').innerText = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            }
                        }
                    }
                }
                else {
                    document.getElementById('result').innerText = `Please type either Yes or No for card replacement`
                }
            }
        }
    }
    else {
        document.getElementById('result').innerText = `Please enter a valid card or suit`
    }
}