var num = 0;
const suits = ['SPADES', 'HEARTS', 'CLUBS', 'DIAMONDS', 'SPADE', 'HEART', 'CLUB', 'DIAMOND']
const cards = ['A', 'ACE', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'JACK', 'Q', 'QUEEN', 'K', 'KING']
var result = ''
var stats = ''
var atLeastStats = ''
var exactness = ''
const deckSize = 52;

function calculateProbability() {
    const totalDraws = document.getElementById('totalDraws').value;
    const successfulDraws = document.getElementById('successfulDraws').value;
    const exactDraws = document.getElementById('exactDraws').value.toUpperCase();
    const cardReplacement = document.getElementById('cardReplacement').value.toUpperCase();
    const selectedCard = document.getElementById('selectedCard').value.toUpperCase();
    if (exactDraws == 'NO') {
        exactness = 'at least'
    } else if (exactDraws == 'YES') {
        exactness = 'exactly'
    }
    if (suits.includes(selectedCard)) {
        num = 13
        if (successfulDraws > 4) {
            result = `You cannot have more than 4 successful draws`
        } else {
            if (totalDraws < successfulDraws) {
                result = `You cannot have more successful draws than total draws`
            } else {
                if (cardReplacement == 'NO') {
                    if (totalDraws > 6) {
                        result = `Please only have 6 or fewer total draws`
                    } else {
                        result = `The probability of drawing ${exactness} ${successfulDraws} ${selectedCard}(s) in ${totalDraws} draw(s) without card replacement:`;
                        if (totalDraws == 1) {
                            stats = `(${num}/${deckSize}) = ` + (num / deckSize);
                        } else if (totalDraws == 2) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1));
                            } else {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1));
                            }
                        } else if (totalDraws == 3) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1})*(${deckSize - num - 1}/${deckSize - 2}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1)) * ((deckSize - num - 1) / (deckSize - 2));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${deckSize - num}/${deckSize - 2}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((deckSize - num) / (deckSize - 2));
                            } else {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2));
                            }
                        } else if (totalDraws == 4) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1})*(${deckSize - num - 1}/${deckSize - 2})*(${deckSize - num - 2}/${deckSize - 3}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1)) * ((deckSize - num - 1) / (deckSize - 2)) * ((deckSize - num - 2) / (deckSize - 3));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${deckSize - num}/${deckSize - 2})*(${deckSize - num - 1}/${deckSize - 3}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((deckSize - num) / (deckSize - 2)) * ((deckSize - num - 1) / (deckSize - 3));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${deckSize - num}/${deckSize - 3}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((deckSize - num) / (deckSize - 3));
                            } else {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${num - 3}/${deckSize - 3}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((num - 3) / (deckSize - 3));
                            }
                        } else if (totalDraws == 5) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1})*(${deckSize - num - 1}/${deckSize - 2})*(${deckSize - num - 2}/${deckSize - 3})*(${deckSize - num - 3}/${deckSize - 4}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1)) * ((deckSize - num - 1) / (deckSize - 2)) * ((deckSize - num - 2) / (deckSize - 3)) * ((deckSize - num - 3) / (deckSize - 4));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${deckSize - num}/${deckSize - 2})*(${deckSize - num - 1}/${deckSize - 3})*(${deckSize - num - 2}/${deckSize - 4}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((deckSize - num) / (deckSize - 2)) * ((deckSize - num - 1) / (deckSize - 3)) * ((deckSize - num - 2) / (deckSize - 4));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${deckSize - num}/${deckSize - 3})*(${deckSize - num - 1}/${deckSize - 4}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((deckSize - num) / (deckSize - 3)) * ((deckSize - num - 1) / (deckSize - 4));
                            } else {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${num - 3}/${deckSize - 3})*(${deckSize - num}/${deckSize - 4}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((num - 3) / (deckSize - 3)) * ((deckSize - num) / (deckSize - 4));
                            }
                        } else if (totalDraws == 6) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1})*(${deckSize - num - 1}/${deckSize - 2})*(${deckSize - num - 2}/${deckSize - 3})*(${deckSize - num - 3}/${deckSize - 4})*(${deckSize - num - 4}/${deckSize - 5}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1)) * ((deckSize - num - 1) / (deckSize - 2)) * ((deckSize - num - 2) / (deckSize - 3)) * ((deckSize - num - 3) / (deckSize - 4)) * ((deckSize - num - 4) / (deckSize - 5));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${deckSize - num}/${deckSize - 2})*(${deckSize - num - 1}/${deckSize - 3})*(${deckSize - num - 2}/${deckSize - 4})*(${deckSize - num - 3}/${deckSize - 5}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((deckSize - num) / (deckSize - 2)) * ((deckSize - num - 1) / (deckSize - 3)) * ((deckSize - num - 2) / (deckSize - 4)) * ((deckSize - num - 3) / (deckSize - 5));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${deckSize - num}/${deckSize - 3})*(${deckSize - num - 1}/${deckSize - 4})*(${deckSize - num - 2}/${deckSize - 5}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((deckSize - num) / (deckSize - 3)) * ((deckSize - num - 1) / (deckSize - 4)) * ((deckSize - num - 2) / (deckSize - 5));
                            } else {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${num - 3}/${deckSize - 3})*(${deckSize - num}/${deckSize - 4})*(${deckSize - num - 1}/${deckSize - 5}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((num - 3) / (deckSize - 3)) * ((deckSize - num) / (deckSize - 4)) * ((deckSize - num - 1) / (deckSize - 5));
                            }
                        }
                    }
                }
                else if (cardReplacement == 'YES') {
                    if (totalDraws > 6) {
                        result = `Please only have 6 or fewer total draws`
                    } else {
                        result = `The probability of drawing ${exactness} ${successfulDraws} ${selectedCard}(s) in ${totalDraws} draw(s) with card replacement:`;
                        if (totalDraws == 1) {
                            stats = `(${num}/${deckSize}) = ` + (num / deckSize);
                        } else if (totalDraws == 2) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize));
                            } else {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize));
                            }
                        } else if (totalDraws == 3) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize));
                            }
                        } else if (totalDraws == 4) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((num) / (deckSize));
                            }
                        } else if (totalDraws == 5) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            }
                        } else if (totalDraws == 6) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            }
                        }
                    }
                }
                else {
                    result = `Please type either Yes or No for card replacement`
                }
            }
        }
    } else if (cards.includes(selectedCard)) {
        num = 4
        if (successfulDraws > 4) {
            result = `You cannot have more than 4 successful draws`
        } else {
            if (totalDraws < successfulDraws) {
                result = `You cannot have more successful draws than total draws`
            } else {
                if (cardReplacement == 'NO') {
                    if (totalDraws > 6) {
                        result = `Please only have 6 or fewer total draws`
                    } else {
                        result = `The probability of drawing ${exactness} ${successfulDraws} ${selectedCard}(s) in ${totalDraws} draw(s) without card replacement:`;
                        if (totalDraws == 1) {
                            stats = `(${num}/${deckSize}) = ` + (num / deckSize);
                        } else if (totalDraws == 2) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1));
                            } else {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1));
                            }
                        } else if (totalDraws == 3) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1})*(${deckSize - num - 1}/${deckSize - 2}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1)) * ((deckSize - num - 1) / (deckSize - 2));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${deckSize - num}/${deckSize - 2}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((deckSize - num) / (deckSize - 2));
                            } else {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2));
                            }
                        } else if (totalDraws == 4) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1})*(${deckSize - num - 1}/${deckSize - 2})*(${deckSize - num - 2}/${deckSize - 3}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1)) * ((deckSize - num - 1) / (deckSize - 2)) * ((deckSize - num - 2) / (deckSize - 3));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${deckSize - num}/${deckSize - 2})*(${deckSize - num - 1}/${deckSize - 3}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((deckSize - num) / (deckSize - 2)) * ((deckSize - num - 1) / (deckSize - 3));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${deckSize - num}/${deckSize - 3}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((deckSize - num) / (deckSize - 3));
                            } else {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${num - 3}/${deckSize - 3}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((num - 3) / (deckSize - 3));
                            }
                        } else if (totalDraws == 5) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1})*(${deckSize - num - 1}/${deckSize - 2})*(${deckSize - num - 2}/${deckSize - 3})*(${deckSize - num - 3}/${deckSize - 4}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1)) * ((deckSize - num - 1) / (deckSize - 2)) * ((deckSize - num - 2) / (deckSize - 3)) * ((deckSize - num - 3) / (deckSize - 4));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${deckSize - num}/${deckSize - 2})*(${deckSize - num - 1}/${deckSize - 3})*(${deckSize - num - 2}/${deckSize - 4}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((deckSize - num) / (deckSize - 2)) * ((deckSize - num - 1) / (deckSize - 3)) * ((deckSize - num - 2) / (deckSize - 4));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${deckSize - num}/${deckSize - 3})*(${deckSize - num - 1}/${deckSize - 4}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((deckSize - num) / (deckSize - 3)) * ((deckSize - num - 1) / (deckSize - 4));
                            } else {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${num - 3}/${deckSize - 3})*(${deckSize - num}/${deckSize - 4}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((num - 3) / (deckSize - 3)) * ((deckSize - num) / (deckSize - 4));
                            }
                        } else {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1})*(${deckSize - num - 1}/${deckSize - 2})*(${deckSize - num - 2}/${deckSize - 3})*(${deckSize - num - 3}/${deckSize - 4})*(${deckSize - num - 4}/${deckSize - 5}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize - 1)) * ((deckSize - num - 1) / (deckSize - 2)) * ((deckSize - num - 2) / (deckSize - 3)) * ((deckSize - num - 3) / (deckSize - 4)) * ((deckSize - num - 4) / (deckSize - 5));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${deckSize - num}/${deckSize - 2})*(${deckSize - num - 1}/${deckSize - 3})*(${deckSize - num - 2}/${deckSize - 4})*(${deckSize - num - 3}/${deckSize - 5}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((deckSize - num) / (deckSize - 2)) * ((deckSize - num - 1) / (deckSize - 3)) * ((deckSize - num - 2) / (deckSize - 4)) * ((deckSize - num - 3) / (deckSize - 5));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${deckSize - num}/${deckSize - 3})*(${deckSize - num - 1}/${deckSize - 4})*(${deckSize - num - 2}/${deckSize - 5}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((deckSize - num) / (deckSize - 3)) * ((deckSize - num - 1) / (deckSize - 4)) * ((deckSize - num - 2) / (deckSize - 5));
                            } else {
                                stats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1})*(${num - 2}/${deckSize - 2})*(${num - 3}/${deckSize - 3})*(${deckSize - num}/${deckSize - 4})*(${deckSize - num - 1}/${deckSize - 5}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1)) * ((num - 2) / (deckSize - 2)) * ((num - 3) / (deckSize - 3)) * ((deckSize - num) / (deckSize - 4)) * ((deckSize - num - 1) / (deckSize - 5));
                            }
                        }
                    }
                }
                else if (cardReplacement == 'YES') {
                    if (totalDraws > 6) {
                        result = `Please only have 6 or fewer total draws`
                    } else {
                        result = `The probability of drawing ${exactness} ${successfulDraws} ${selectedCard}(s) in ${totalDraws} draw(s) with card replacement:`;
                        if (totalDraws == 1) {
                            stats = `(${num}/${deckSize}) = ` + (num / deckSize);
                        } else if (totalDraws == 2) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize));
                            } else {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize));
                            }
                        } else if (totalDraws == 3) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize));
                            }
                        } else if (totalDraws == 4) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((num) / (deckSize));
                            }
                        } else if (totalDraws == 5) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            }
                        } else if (totalDraws == 6) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            } else {
                                stats = `(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${num}/${deckSize})*(${deckSize - num}/${deckSize})*(${deckSize - num}/${deckSize}) = ` + (num / deckSize) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((num) / (deckSize)) * ((deckSize - num) / (deckSize)) * ((deckSize - num) / (deckSize));
                            }
                        }
                    }
                }
                else {
                    result = `Please type either Yes or No for card replacement`
                }
            }
        }
    }
    else {
        result = `Please enter a valid card or suit`
    }
    if (exactDraws == 'NO') {
        if (cardReplacement == 'NO') {
            if (totalDraws == 1) {
                atLeastStats = `(${num}/${deckSize}) = ` + (num / deckSize);
            } else if (totalDraws == 2) {
                if (successfulDraws == 1) {
                    a = `(${num}/${deckSize})*(${deckSize - num}/${deckSize - 1}) + (${deckSize - num}/${deckSize - 1})*(${num}/${deckSize}) + (${num}/${deckSize})*(${num - 1}/${deckSize - 1}) = `;
                    b = ((num / deckSize) * ((deckSize - num) / (deckSize - 1)))  + ((deckSize - num) / ((deckSize - 1)) * (num / deckSize)) + ((num / deckSize) * ((num - 1) / (deckSize - 1)));
                    atLeastStats = a + b;
                } else if (successfulDraws == 2) {
                    atLeastStats = `(${num}/${deckSize})*(${num - 1}/${deckSize - 1}) = ` + (num / deckSize) * ((num - 1) / (deckSize - 1));
                }
            } else if (totalDraws == 3) {
                if (successfulDraws == 1) {
                    a = `(${num}/${deckSize})*(${deckSize-num}/${deckSize-1})*(${deckSize-num-1}/${deckSize-2}) + (${deckSize-num}/${deckSize})*(${num}/${deckSize-1})*(${deckSize-num-1}/${deckSize-2}) + (${deckSize-num}/${deckSize})*(${deckSize-num-1}/${deckSize-1})*(${num}/${deckSize-2}) = `;
                    b = (num / deckSize) * ((deckSize-num)/(deckSize-1)) * ((deckSize-num-1)/(deckSize-2)) + ((deckSize-num) / deckSize) * ((num)/(deckSize-1)) * ((deckSize-num-1)/(deckSize-2)) + ((deckSize-num) / deckSize) * ((deckSize-num-1)/(deckSize-1)) * ((num)/(deckSize-2));
                    c = `(${num}/${deckSize})*(${num-1}/${deckSize-1})*(${deckSize-num}/${deckSize-2}) + (${num}/${deckSize})*(${deckSize-num}/${deckSize-1})*(${num-1}/${deckSize-2}) + (${deckSize-num}/${deckSize})*(${num}/${deckSize-1})*(${num - 1}/${deckSize-2}) + (${num}/${deckSize})*(${num-1}/${deckSize-1})*(${num-2}/${deckSize-2}) = `;
                    d = (num / deckSize) * ((num-1) / (deckSize-1)) * ((deckSize-num) / (deckSize-2)) + (num / deckSize) * ((deckSize-num) / (deckSize-1)) * ((num-1) / (deckSize-2)) + ((deckSize-num) / deckSize) * (num / (deckSize-1)) * ((num - 1) / (deckSize-2)) + ((num)/(deckSize)) * ((num-1)/(deckSize-1)) * ((num-2)/(deckSize-2));
                    atLeastStats = a + b + '\n' + c + d + '\n' + `${b} + ${d} = ` + (b + d)
                } else if (successfulDraws == 2) {
                    a = (num / deckSize) * ((num-1) / (deckSize-1)) * ((deckSize-num) / (deckSize-2)) + (num / deckSize) * ((deckSize-num) / (deckSize-1)) * ((num-1) / (deckSize-2)) + ((deckSize-num) / deckSize) * (num / (deckSize-1)) * ((num - 1) / (deckSize-2)) + ((num)/(deckSize)) * ((num-1)/(deckSize-1)) * ((num-2)/(deckSize-2));
                    b = `(${num}/${deckSize})*(${num-1}/${deckSize-1})*(${deckSize-num}/${deckSize-2}) + (${num}/${deckSize})*(${deckSize-num}/${deckSize-1})*(${num-1}/${deckSize-2}) + (${deckSize-num}/${deckSize})*(${num}/${deckSize-1})*(${num - 1}/${deckSize-2}) + (${num}/${deckSize})*(${num-1}/${deckSize-1})*(${num-2}/${deckSize-2}) = `;
                    atLeastStats = b + a
                } else if (successfulDraws == 3) {
                    atLeastStats = `(${num}/${deckSize})*(${num-1}/${deckSize - 1})*(${num-2}/${deckSize - 2}) = ` + (num / deckSize) * ((num-1) / (deckSize - 1)) * ((num-2) / (deckSize - 2));
                }


            } else if (totalDraws == 4) {
                if (successfulDraws == 1) {
                    // a = `(${}/${})*(${}/${})*(${}/${})*(${}/${})`
                    // b = (()/())*(()/())*(()/())*(()/())
                } else if (successfulDraws == 2) {
                    // a = `(${}/${})*(${}/${})*(${}/${})*(${}/${})`
                    // b = (()/())*(()/())*(()/())*(()/())
                } else if (successfulDraws == 3) {
                    // a = `(${}/${})*(${}/${})*(${}/${})*(${}/${})`
                    // b = (()/())*(()/())*(()/())*(()/())
                } else if (successfulDraws == 4) {
                    a = `(${num}/${deckSize})*(${num-1}/${deckSize-1})*(${num-2}/${deckSize-2})*(${num-3}/${deckSize-3}) = `
                    b = (()/())*(()/())*(()/())*(()/())
                }
            }


        } else if (cardReplacement == 'YES') {
            // STUFF GOES HERE
        }

        document.getElementById('result').innerText = result
        document.getElementById('stats').innerText = atLeastStats
    } else if (exactDraws == 'YES') {
        document.getElementById('result').innerText = result
        document.getElementById('stats').innerText = stats
    } else {
        document.getElementById('result').innerText = `Please type either Yes or No for exactness`
        document.getElementById('stats').innerText = ''
    }
}