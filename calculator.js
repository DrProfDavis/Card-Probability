var num = 0;
const suits = ['SPADES', 'HEARTS', 'CLUBS', 'DIAMONDS', 'SPADE', 'HEART', 'CLUB', 'DIAMOND']
const cards = ['A', 'ACE', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'JACK', 'Q', 'QUEEN', 'K', 'KING']
var result = ''
var stats = ''
var atLeastStats = ''
var exactness = ''
const deck = 52;

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
                            stats = `(${num}/${deck}) = ` + (num / deck);
                        } else if (totalDraws == 2) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck - 1}) = ` + (num / deck) * ((deck - num) / (deck - 1));
                            } else {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1}) = ` + (num / deck) * ((num - 1) / (deck - 1));
                            }
                        } else if (totalDraws == 3) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck - 1})*(${deck - num - 1}/${deck - 2}) = ` + (num / deck) * ((deck - num) / (deck - 1)) * ((deck - num - 1) / (deck - 2));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2));
                            } else {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2));
                            }
                        } else if (totalDraws == 4) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck - 1})*(${deck - num - 1}/${deck - 2})*(${deck - num - 2}/${deck - 3}) = ` + (num / deck) * ((deck - num) / (deck - 1)) * ((deck - num - 1) / (deck - 2)) * ((deck - num - 2) / (deck - 3));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2})*(${deck - num - 1}/${deck - 3}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * ((deck - num - 1) / (deck - 3));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3));
                            } else {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3));
                            }
                        } else if (totalDraws == 5) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck - 1})*(${deck - num - 1}/${deck - 2})*(${deck - num - 2}/${deck - 3})*(${deck - num - 3}/${deck - 4}) = ` + (num / deck) * ((deck - num) / (deck - 1)) * ((deck - num - 1) / (deck - 2)) * ((deck - num - 2) / (deck - 3)) * ((deck - num - 3) / (deck - 4));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2})*(${deck - num - 1}/${deck - 3})*(${deck - num - 2}/${deck - 4}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * ((deck - num - 1) / (deck - 3)) * ((deck - num - 2) / (deck - 4));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3})*(${deck - num - 1}/${deck - 4}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3)) * ((deck - num - 1) / (deck - 4));
                            } else {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3})*(${deck - num}/${deck - 4}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3)) * ((deck - num) / (deck - 4));
                            }
                        } else if (totalDraws == 6) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck - 1})*(${deck - num - 1}/${deck - 2})*(${deck - num - 2}/${deck - 3})*(${deck - num - 3}/${deck - 4})*(${deck - num - 4}/${deck - 5}) = ` + (num / deck) * ((deck - num) / (deck - 1)) * ((deck - num - 1) / (deck - 2)) * ((deck - num - 2) / (deck - 3)) * ((deck - num - 3) / (deck - 4)) * ((deck - num - 4) / (deck - 5));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2})*(${deck - num - 1}/${deck - 3})*(${deck - num - 2}/${deck - 4})*(${deck - num - 3}/${deck - 5}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * ((deck - num - 1) / (deck - 3)) * ((deck - num - 2) / (deck - 4)) * ((deck - num - 3) / (deck - 5));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3})*(${deck - num - 1}/${deck - 4})*(${deck - num - 2}/${deck - 5}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3)) * ((deck - num - 1) / (deck - 4)) * ((deck - num - 2) / (deck - 5));
                            } else {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3})*(${deck - num}/${deck - 4})*(${deck - num - 1}/${deck - 5}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3)) * ((deck - num) / (deck - 4)) * ((deck - num - 1) / (deck - 5));
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
                            stats = `(${num}/${deck}) = ` + (num / deck);
                        } else if (totalDraws == 2) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((deck - num) / (deck));
                            } else {
                                stats = `(${num}/${deck})*(${num}/${deck}) = ` + (num / deck) * ((num) / (deck));
                            }
                        } else if (totalDraws == 3) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((deck - num) / (deck));
                            } else {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((num) / (deck));
                            }
                        } else if (totalDraws == 4) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck));
                            } else {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck));
                            }
                        } else if (totalDraws == 5) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck));
                            }
                        } else if (totalDraws == 6) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
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
                            stats = `(${num}/${deck}) = ` + (num / deck);
                        } else if (totalDraws == 2) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck - 1}) = ` + (num / deck) * ((deck - num) / (deck - 1));
                            } else {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1}) = ` + (num / deck) * ((num - 1) / (deck - 1));
                            }
                        } else if (totalDraws == 3) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck - 1})*(${deck - num - 1}/${deck - 2}) = ` + (num / deck) * ((deck - num) / (deck - 1)) * ((deck - num - 1) / (deck - 2));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2));
                            } else {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2));
                            }
                        } else if (totalDraws == 4) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck - 1})*(${deck - num - 1}/${deck - 2})*(${deck - num - 2}/${deck - 3}) = ` + (num / deck) * ((deck - num) / (deck - 1)) * ((deck - num - 1) / (deck - 2)) * ((deck - num - 2) / (deck - 3));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2})*(${deck - num - 1}/${deck - 3}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * ((deck - num - 1) / (deck - 3));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3));
                            } else {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3));
                            }
                        } else if (totalDraws == 5) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck - 1})*(${deck - num - 1}/${deck - 2})*(${deck - num - 2}/${deck - 3})*(${deck - num - 3}/${deck - 4}) = ` + (num / deck) * ((deck - num) / (deck - 1)) * ((deck - num - 1) / (deck - 2)) * ((deck - num - 2) / (deck - 3)) * ((deck - num - 3) / (deck - 4));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2})*(${deck - num - 1}/${deck - 3})*(${deck - num - 2}/${deck - 4}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * ((deck - num - 1) / (deck - 3)) * ((deck - num - 2) / (deck - 4));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3})*(${deck - num - 1}/${deck - 4}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3)) * ((deck - num - 1) / (deck - 4));
                            } else {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3})*(${deck - num}/${deck - 4}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3)) * ((deck - num) / (deck - 4));
                            }
                        } else {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck - 1})*(${deck - num - 1}/${deck - 2})*(${deck - num - 2}/${deck - 3})*(${deck - num - 3}/${deck - 4})*(${deck - num - 4}/${deck - 5}) = ` + (num / deck) * ((deck - num) / (deck - 1)) * ((deck - num - 1) / (deck - 2)) * ((deck - num - 2) / (deck - 3)) * ((deck - num - 3) / (deck - 4)) * ((deck - num - 4) / (deck - 5));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2})*(${deck - num - 1}/${deck - 3})*(${deck - num - 2}/${deck - 4})*(${deck - num - 3}/${deck - 5}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * ((deck - num - 1) / (deck - 3)) * ((deck - num - 2) / (deck - 4)) * ((deck - num - 3) / (deck - 5));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3})*(${deck - num - 1}/${deck - 4})*(${deck - num - 2}/${deck - 5}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3)) * ((deck - num - 1) / (deck - 4)) * ((deck - num - 2) / (deck - 5));
                            } else {
                                stats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3})*(${deck - num}/${deck - 4})*(${deck - num - 1}/${deck - 5}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3)) * ((deck - num) / (deck - 4)) * ((deck - num - 1) / (deck - 5));
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
                            stats = `(${num}/${deck}) = ` + (num / deck);
                        } else if (totalDraws == 2) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((deck - num) / (deck));
                            } else {
                                stats = `(${num}/${deck})*(${num}/${deck}) = ` + (num / deck) * ((num) / (deck));
                            }
                        } else if (totalDraws == 3) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((deck - num) / (deck));
                            } else {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((num) / (deck));
                            }
                        } else if (totalDraws == 4) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck));
                            } else {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck));
                            }
                        } else if (totalDraws == 5) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck));
                            }
                        } else if (totalDraws == 6) {
                            if (successfulDraws == 1) {
                                stats = `(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else if (successfulDraws == 2) {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else if (successfulDraws == 3) {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
                            } else {
                                stats = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) = ` + (num / deck) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck));
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
                atLeastStats = `(${num}/${deck}) = ` + (num / deck);
            } else if (totalDraws == 2) {
                if (successfulDraws == 1) {
                    a = `(${num}/${deck})*(${deck - num}/${deck - 1}) + (${deck - num}/${deck - 1})*(${num}/${deck}) + (${num}/${deck})*(${num - 1}/${deck - 1}) = `;
                    b = ((num / deck) * ((deck - num) / (deck - 1))) + ((deck - num) / ((deck - 1)) * (num / deck)) + ((num / deck) * ((num - 1) / (deck - 1)));
                    atLeastStats = a + b;
                } else if (successfulDraws == 2) {
                    atLeastStats = `(${num}/${deck})*(${num - 1}/${deck - 1}) = ` + (num / deck) * ((num - 1) / (deck - 1));
                }
            } else if (totalDraws == 3) {
                if (successfulDraws == 1) {
                    a = `(${num}/${deck})*(${deck - num}/${deck - 1})*(${deck - num - 1}/${deck - 2}) + (${deck - num}/${deck})*(${num}/${deck - 1})*(${deck - num - 1}/${deck - 2}) + (${deck - num}/${deck})*(${deck - num - 1}/${deck - 1})*(${num}/${deck - 2}) = `;
                    b = (num / deck) * ((deck - num) / (deck - 1)) * ((deck - num - 1) / (deck - 2)) + ((deck - num) / deck) * ((num) / (deck - 1)) * ((deck - num - 1) / (deck - 2)) + ((deck - num) / deck) * ((deck - num - 1) / (deck - 1)) * ((num) / (deck - 2));
                    c = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2}) + (${num}/${deck})*(${deck - num}/${deck - 1})*(${num - 1}/${deck - 2}) + (${deck - num}/${deck})*(${num}/${deck - 1})*(${num - 1}/${deck - 2}) + (${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2}) = `;
                    d = (num / deck) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) + (num / deck) * ((deck - num) / (deck - 1)) * ((num - 1) / (deck - 2)) + ((deck - num) / deck) * (num / (deck - 1)) * ((num - 1) / (deck - 2)) + ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2));
                    atLeastStats = a + b + '\n' + c + d + '\n' + `${b} + ${d} = ` + (b + d)
                } else if (successfulDraws == 2) {
                    a = (num / deck) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) + (num / deck) * ((deck - num) / (deck - 1)) * ((num - 1) / (deck - 2)) + ((deck - num) / deck) * (num / (deck - 1)) * ((num - 1) / (deck - 2)) + ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2));
                    b = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2}) + (${num}/${deck})*(${deck - num}/${deck - 1})*(${num - 1}/${deck - 2}) + (${deck - num}/${deck})*(${num}/${deck - 1})*(${num - 1}/${deck - 2}) + (${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2}) = `;
                    atLeastStats = b + a
                } else if (successfulDraws == 3) {
                    atLeastStats = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2}) = ` + (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2));
                }

            } else if (totalDraws == 4) {
                if (successfulDraws == 1) {
                    a = `(${num}/${deck})*(${deck - num}/${deck-1})*(${deck - num - 1}/${deck-2})*(${deck - num - 2}/${deck-3}) + (${deck - num}/${deck})*(${num}/${deck-1})*(${deck - num - 1}/${deck-2})*(${deck - num - 2}/${deck-3}) + \n(${deck - num}/${deck})*(${deck - num - 1}/${deck-1})*(${num}/${deck-2})*(${deck - num - 2}/${deck-3}) + (${deck - num}/${deck})*(${deck - num - 1}/${deck-1})*(${deck - num - 2}/${deck-2})*(${num}/${deck-3}) = `
                    b = ((num)/(deck))*((deck - num)/(deck-1))*((deck - num - 1)/(deck-2))*((deck - num - 2)/(deck-3)) + ((deck - num)/(deck))*((num)/(deck-1))*((deck - num - 1)/(deck-2))*((deck - num - 2)/(deck-3)) + ((deck - num)/(deck))*((deck - num - 1)/(deck-1))*((num)/(deck-2))*((deck - num - 2)/(deck-3)) + ((deck - num)/(deck))*((deck - num - 1)/(deck-1))*((deck - num - 2)/(deck-2))*((num)/(deck-3))
                    c = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2})*(${deck - num - 1}/${deck - 3}) + (${num}/${deck})*(${deck - num}/${deck - 1})*(${num - 1}/${deck - 2})*(${deck - num - 1}/${deck - 3}) + \n(${deck - num}/${deck})*(${num}/${deck - 1})*(${num - 1}/${deck - 2})*(${deck - num - 1}/${deck - 3}) + (${num}/${deck})*(${deck - num}/${deck - 1})*(${deck - num - 1}/${deck - 2})*(${num - 1}/${deck - 3}) + \n(${deck - num}/${deck})*(${num}/${deck - 1})*(${deck - num - 1}/${deck - 2})*(${num - 1}/${deck - 3}) + (${deck - num}/${deck})*(${deck - num - 1}/${deck - 1})*(${num}/${deck - 2})*(${num - 1}/${deck - 3}) = `;
                    d = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * ((deck - num - 1) / (deck - 3)) + ((num) / (deck)) * ((deck - num) / (deck - 1)) * ((num - 1) / (deck - 2)) * ((deck - num - 1) / (deck - 3)) + ((deck - num) / (deck)) * ((num) / (deck - 1)) * ((num - 1) / (deck - 2)) * ((deck - num - 1) / (deck - 3)) + ((num) / (deck)) * ((deck - num) / (deck - 1)) * ((deck - num - 1) / (deck - 2)) * ((num - 1) / (deck - 3)) + ((deck - num) / (deck)) * ((num) / (deck - 1)) * ((deck - num - 1) / (deck - 2)) * ((num - 1) / (deck - 3)) + ((deck - num) / (deck)) * ((deck - num - 1) / (deck - 1)) * ((num) / (deck - 2)) * ((num - 1) / (deck - 3));
                    e = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3}) + (${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2})*(${num - 2}/${deck - 3}) + \n(${num}/${deck})*(${deck - num}/${deck - 1})*(${num - 1}/${deck - 2})*(${num - 2}/${deck - 3}) + (${deck - num}/${deck})*(${num}/${deck - 1})*(${num - 1}/${deck - 2})*(${num - 2}/${deck - 3}) = `;
                    f = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3)) + ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * ((num - 2) / (deck - 3)) + ((num) / (deck)) * ((deck - num) / (deck - 1)) * ((num - 1) / (deck - 2)) * ((num - 2) / (deck - 3)) + ((deck - num) / (deck)) * ((num) / (deck - 1)) * ((num - 1) / (deck - 2)) * ((num - 2) / (deck - 3));
                    g = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3}) = `;
                    h = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3));
                    atLeastStats = a + b + '\n\n' + c + d + '\n\n' + e + f + '\n\n' + g + h + '\n\n' + `${b} + ${d} + ${f} + ${h} = ` + (b + d + f + h)
                } else if (successfulDraws == 2) {
                    a = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2})*(${deck - num - 1}/${deck - 3}) + (${num}/${deck})*(${deck - num}/${deck - 1})*(${num - 1}/${deck - 2})*(${deck - num - 1}/${deck - 3}) + \n(${deck - num}/${deck})*(${num}/${deck - 1})*(${num - 1}/${deck - 2})*(${deck - num - 1}/${deck - 3}) + (${num}/${deck})*(${deck - num}/${deck - 1})*(${deck - num - 1}/${deck - 2})*(${num - 1}/${deck - 3}) + \n(${deck - num}/${deck})*(${num}/${deck - 1})*(${deck - num - 1}/${deck - 2})*(${num - 1}/${deck - 3}) + (${deck - num}/${deck})*(${deck - num - 1}/${deck - 1})*(${num}/${deck - 2})*(${num - 1}/${deck - 3}) = `;
                    b = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * ((deck - num - 1) / (deck - 3)) + ((num) / (deck)) * ((deck - num) / (deck - 1)) * ((num - 1) / (deck - 2)) * ((deck - num - 1) / (deck - 3)) + ((deck - num) / (deck)) * ((num) / (deck - 1)) * ((num - 1) / (deck - 2)) * ((deck - num - 1) / (deck - 3)) + ((num) / (deck)) * ((deck - num) / (deck - 1)) * ((deck - num - 1) / (deck - 2)) * ((num - 1) / (deck - 3)) + ((deck - num) / (deck)) * ((num) / (deck - 1)) * ((deck - num - 1) / (deck - 2)) * ((num - 1) / (deck - 3)) + ((deck - num) / (deck)) * ((deck - num - 1) / (deck - 1)) * ((num) / (deck - 2)) * ((num - 1) / (deck - 3));
                    c = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3}) + (${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2})*(${num - 2}/${deck - 3}) + \n(${num}/${deck})*(${deck - num}/${deck - 1})*(${num - 1}/${deck - 2})*(${num - 2}/${deck - 3}) + (${deck - num}/${deck})*(${num}/${deck - 1})*(${num - 1}/${deck - 2})*(${num - 2}/${deck - 3}) = `;
                    d = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3)) + ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * ((num - 2) / (deck - 3)) + ((num) / (deck)) * ((deck - num) / (deck - 1)) * ((num - 1) / (deck - 2)) * ((num - 2) / (deck - 3)) + ((deck - num) / (deck)) * ((num) / (deck - 1)) * ((num - 1) / (deck - 2)) * ((num - 2) / (deck - 3));
                    e = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3}) = `;
                    f = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3));
                    atLeastStats = a + b + '\n\n' + c + d + '\n\n' + e + f + '\n\n' + `${b} + ${d} + ${f} = ` + (b + d + f)
                } else if (successfulDraws == 3) {
                    a = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3}) + (${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2})*(${num - 2}/${deck - 3}) + \n(${num}/${deck})*(${deck - num}/${deck - 1})*(${num - 1}/${deck - 2})*(${num - 2}/${deck - 3}) + (${deck - num}/${deck})*(${num}/${deck - 1})*(${num - 1}/${deck - 2})*(${num - 2}/${deck - 3}) = `;
                    b = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3)) + ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * ((num - 2) / (deck - 3)) + ((num) / (deck)) * ((deck - num) / (deck - 1)) * ((num - 1) / (deck - 2)) * ((num - 2) / (deck - 3)) + ((deck - num) / (deck)) * ((num) / (deck - 1)) * ((num - 1) / (deck - 2)) * ((num - 2) / (deck - 3));
                    c = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3}) = `;
                    d = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3));
                    atLeastStats = a + b + '\n\n' + c + d + '\n\n' + `${b} + ${d} = ` + (b + d)
                } else if (successfulDraws == 4) {
                    a = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3}) = `;
                    b = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3));
                    atLeastStats = a + b
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