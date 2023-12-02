var num = 0;
const suits = ['SPADES', 'HEARTS', 'CLUBS', 'DIAMONDS', 'SPADE', 'HEART', 'CLUB', 'DIAMOND']
const cards = ['A', 'ACE', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'JACK', 'Q', 'QUEEN', 'K', 'KING']
var result = ''
var exactStats = ''
var atLeastStats = ''
var exactness = ''
var atLeastPercent = ''
var exactPercent = ''
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
    if (cardReplacement == 'YES') {
        replace = 'with'
    } else if (cardReplacement == 'NO') {
        replace = 'without'
    }
    if (suits.includes(selectedCard)) {
        num = 13
    } else if (cards.includes(selectedCard)) {
        num = 4
    }
    result = `The probability of drawing ${exactness} ${successfulDraws} ${selectedCard}(s) in ${totalDraws} draw(s) ${replace} card replacement:`;
    if (cardReplacement == 'NO') {
        if (totalDraws == 1) {
            atLeastStats = `(${num}/${deck}) = ` + (num / deck);
            exactStats = `(${num}/${deck}) = ` + (num / deck);
            atLeastPercent = ((num / deck) * 100).toFixed(2)
            exactPercent = ((num / deck) * 100).toFixed(2)
        } else if (totalDraws == 2) {
            if (successfulDraws == 1) {
                a = `(${num}/${deck})*(${deck - num}/${deck - 1}) * 3 = `;
                b = (((num / deck) * ((deck - num) / (deck - 1))) * 3);
                c = `(${num}/${deck})*(${num - 1}/${deck - 1}) = `;
                d = ((num / deck) * ((num - 1) / (deck - 1)));
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} = ` + (b + d).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 2) {
                a = `(${num}/${deck})*(${num - 1}/${deck - 1}) = `;
                b = ((num / deck) * ((num - 1) / (deck - 1)));
                atLeastStats = a + b.toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((num / deck) * 100).toFixed(2)
                exactPercent = ((num / deck) * 100).toFixed(2)
            }
        } else if (totalDraws == 3) {
            if (successfulDraws == 1) {
                a = `(${num}/${deck})*(${deck - num}/${deck - 1})*(${deck - num - 1}/${deck - 2}) * 3= `;
                b = (num / deck) * ((deck - num) / (deck - 1)) * ((deck - num - 1) / (deck - 2)) * 3;
                c = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2}) * 3 = `;
                d = (num / deck) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * 3;
                e = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2}) = `;
                f = (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2));
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + e + f.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} + ${f.toFixed(6)} = ` + (b + d + f).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d + f) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 2) {
                a = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2}) * 3 = `;
                b = (num / deck) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * 3;
                c = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2}) = `;
                d = (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2));
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} = ` + (b + d).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 3) {
                a = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2}) = `;
                b = (num / deck) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2));
                atLeastStats = a + b.toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            }
        } else if (totalDraws == 4) {
            if (successfulDraws == 1) {
                a = `(${num}/${deck})*(${deck - num}/${deck - 1})*(${deck - num - 1}/${deck - 2})*(${deck - num - 2}/${deck - 3}) * 4 = `;
                b = ((num) / (deck)) * ((deck - num) / (deck - 1)) * ((deck - num - 1) / (deck - 2)) * ((deck - num - 2) / (deck - 3)) * 4;
                c = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2})*(${deck - num - 1}/${deck - 3}) * 6 = `;
                d = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * ((deck - num - 1) / (deck - 3)) * 6;
                e = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3}) * 4 = `;
                f = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3)) * 4;
                g = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3}) = `;
                h = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3));
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + e + f.toFixed(6) + '\n\n' + g + h.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} + ${f.toFixed(6)} + ${h.toFixed(6)} = ` + (b + d + f + h).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d + f + h) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 2) {
                a = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2})*(${deck - num - 1}/${deck - 3}) * 6 = `;
                b = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * ((deck - num - 1) / (deck - 3)) * 6;
                c = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3}) * 4 = `;
                d = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3)) * 4;
                e = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3}) = `;
                f = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3));
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + e + f.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} + ${f.toFixed(6)} = ` + (b + d + f).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d + f) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 3) {
                a = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3}) * 4 = `;
                b = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3)) * 4;
                c = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3}) = `;
                d = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3));
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} = ` + (b + d).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 4) {
                a = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3}) = `;
                b = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3));
                atLeastStats = a + b.toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            }
        } else if (totalDraws == 5) {
            if (successfulDraws == 1) {
                a = `(${num}/${deck})*(${deck - num}/${deck - 1})*(${deck - num - 1}/${deck - 2})*(${deck - num - 2}/${deck - 3})*(${deck - num - 3}/${deck - 4}) * 5 = `;
                b = ((num) / (deck)) * ((deck - num) / (deck - 1)) * ((deck - num - 1) / (deck - 2)) * ((deck - num - 2) / (deck - 3)) * ((deck - num - 3) / (deck - 4)) * 5;
                c = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2})*(${deck - num - 1}/${deck - 3})*(${deck - num - 2}/${deck - 4}) * 10 = `;
                d = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * ((deck - num - 1) / (deck - 3)) * ((deck - num - 2) / (deck - 4)) * 10;
                e = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3})*(${deck - num - 1}/${deck - 4}) * 10 = `;
                f = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3)) * ((deck - num - 1) / (deck - 4)) * 10;
                g = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3})*(${deck - num}/${deck - 4}) * 5 = `;
                h = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3)) * ((deck - num) / (deck - 4)) * 5;
                atLeastStats = a + b + '\n\n' + c + d + '\n\n' + e + f + '\n\n' + g + h + '\n\n' + `${b} + ${d} + ${f} + ${h} = ` + (b + d + f + h)
                exactStats = a + b
                atLeastPercent = ((b + d + f + h) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 2) {
                a = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2})*(${deck - num - 1}/${deck - 3})*(${deck - num - 2}/${deck - 4}) * 10 = `;
                b = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * ((deck - num - 1) / (deck - 3)) * ((deck - num - 2) / (deck - 4)) * 10;
                c = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3})*(${deck - num - 1}/${deck - 4}) * 10 = `;
                d = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3)) * ((deck - num - 1) / (deck - 4)) * 10;
                e = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3})*(${deck - num}/${deck - 4}) * 5 = `;
                f = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3)) * ((deck - num) / (deck - 4)) * 5;
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + e + f.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} + ${f.toFixed(6)} = ` + (b + d + f).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d + f) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 3) {
                a = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3})*(${deck - num - 1}/${deck - 4}) * 10 = `;
                b = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3)) * ((deck - num - 1) / (deck - 4)) * 10;
                c = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3})*(${deck - num}/${deck - 4}) * 5 = `;
                d = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3)) * ((deck - num) / (deck - 4)) * 5;
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} = ` + (b + d).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 4) {
                a = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3})*(${deck - num}/${deck - 4}) * 5 = `;
                b = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3)) * ((deck - num) / (deck - 4)) * 5;
                atLeastStats = a + b.toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            }
        } else if (totalDraws == 6) {
            if (successfulDraws == 1) {
                a = `(${num}/${deck})*(${deck - num}/${deck - 1})*(${deck - num - 1}/${deck - 2})*(${deck - num - 2}/${deck - 3})*(${deck - num - 3}/${deck - 4})*(${deck - num - 4}/${deck - 5}) * 6 = `;
                b = ((num) / (deck)) * ((deck - num) / (deck - 1)) * ((deck - num - 1) / (deck - 2)) * ((deck - num - 2) / (deck - 3)) * ((deck - num - 3) / (deck - 4)) * ((deck - num - 4) / (deck - 5)) * 6;
                c = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2})*(${deck - num - 1}/${deck - 3})*(${deck - num - 2}/${deck - 4})*(${deck - num - 3}/${deck - 5}) * 15 = `;
                d = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * ((deck - num - 1) / (deck - 3)) * ((deck - num - 2) / (deck - 4)) * ((deck - num - 3) / (deck - 5)) * 15;
                e = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3})*(${deck - num - 1}/${deck - 4})*(${deck - num - 2}/${deck - 5}) * 20 = `;
                f = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3)) * ((deck - num - 1) / (deck - 4)) * ((deck - num - 2) / (deck - 5)) * 20;
                g = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3})*(${deck - num}/${deck - 4})*(${deck - num - 1}/${deck - 5}) * 15 = `;
                h = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3)) * ((deck - num) / (deck - 4)) * ((deck - num - 1) / (deck - 5)) * 15;
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + e + f.toFixed(6) + '\n\n' + g + h.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} + ${f.toFixed(6)} + ${h.toFixed(6)} = ` + (b + d + f + h).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d + f + h) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 2) {
                a = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${deck - num}/${deck - 2})*(${deck - num - 1}/${deck - 3})*(${deck - num - 2}/${deck - 4})*(${deck - num - 3}/${deck - 5}) * 15 = `;
                b = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((deck - num) / (deck - 2)) * ((deck - num - 1) / (deck - 3)) * ((deck - num - 2) / (deck - 4)) * ((deck - num - 3) / (deck - 5)) * 15;
                c = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3})*(${deck - num - 1}/${deck - 4})*(${deck - num - 2}/${deck - 5}) * 20 = `;
                d = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3)) * ((deck - num - 1) / (deck - 4)) * ((deck - num - 2) / (deck - 5)) * 20;
                e = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3})*(${deck - num}/${deck - 4})*(${deck - num - 1}/${deck - 5}) * 15 = `;
                f = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3)) * ((deck - num) / (deck - 4)) * ((deck - num - 1) / (deck - 5)) * 15;
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + e + f.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} + ${f.toFixed(6)} = ` + (b + d + f).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d + f) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 3) {
                a = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${deck - num}/${deck - 3})*(${deck - num - 1}/${deck - 4})*(${deck - num - 2}/${deck - 5}) * 20 = `;
                b = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((deck - num) / (deck - 3)) * ((deck - num - 1) / (deck - 4)) * ((deck - num - 2) / (deck - 5)) * 20;
                c = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3})*(${deck - num}/${deck - 4})*(${deck - num - 1}/${deck - 5}) * 15 = `;
                d = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3)) * ((deck - num) / (deck - 4)) * ((deck - num - 1) / (deck - 5)) * 15;
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} = ` + (b + d).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 4) {
                a = `(${num}/${deck})*(${num - 1}/${deck - 1})*(${num - 2}/${deck - 2})*(${num - 3}/${deck - 3})*(${deck - num}/${deck - 4})*(${deck - num - 1}/${deck - 5}) * 15 = `;
                b = ((num) / (deck)) * ((num - 1) / (deck - 1)) * ((num - 2) / (deck - 2)) * ((num - 3) / (deck - 3)) * ((deck - num) / (deck - 4)) * ((deck - num - 1) / (deck - 5)) * 15;
                atLeastStats = a + b.toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b) * 100).toFixed(4)
                exactPercent = (b * 100).toFixed(4)
            }
        }
    }
    else if (cardReplacement == 'YES') {
        if (totalDraws == 1) {
            a = `(${num}/${deck}) = `;
            b = (num / deck);
            atLeastStats = a + b.toFixed(6)
            exactStats = a + b.toFixed(6)
            atLeastPercent = ((num / deck) * 100).toFixed(2)
            exactPercent = ((num / deck) * 100).toFixed(2)
        } else if (totalDraws == 2) {
            if (successfulDraws == 1) {
                a = `(${num}/${deck})*(${deck - num}/${deck}) * 3 = `;
                b = ((num / deck) * ((deck - num) / (deck))) * 3;
                c = `(${num}/${deck})*(${num}/${deck}) = `;
                d = (num / deck) * ((num) / (deck));
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} = ` + (b + d).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 2) {
                a = `(${num}/${deck})*(${num}/${deck}) = `;
                b = (num / deck) * ((num) / (deck));
                atLeastStats = a + b.toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((num / deck) * 100).toFixed(2)
                exactPercent = ((num / deck) * 100).toFixed(2)
            }
        } else if (totalDraws == 3) {
            if (successfulDraws == 1) {
                a = `(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 3= `;
                b = (num / deck) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 3;
                c = `(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck}) * 3 = `;
                d = (num / deck) * ((num) / (deck)) * ((deck - num) / (deck)) * 3;
                e = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck}) = `;
                f = (num / deck) * ((num) / (deck)) * ((num) / (deck));
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + e + f.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} + ${f.toFixed(6)} = ` + (b + d + f).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d + f) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 2) {
                a = `(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck}) * 3 = `;
                b = (num / deck) * ((num) / (deck)) * ((deck - num) / (deck)) * 3;
                c = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck}) = `;
                d = (num / deck) * ((num) / (deck)) * ((num) / (deck));
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} = ` + (b + d).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 3) {
                a = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck}) = `;
                b = (num / deck) * ((num) / (deck)) * ((num) / (deck));
                atLeastStats = a + b.toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            }
        } else if (totalDraws == 4) {
            if (successfulDraws == 1) {
                a = `(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 4 = `;
                b = ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 4;
                c = `(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 6 = `;
                d = ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 6;
                e = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck}) * 4 = `;
                f = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * 4;
                g = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck}) = `;
                h = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck));
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + e + f.toFixed(6) + '\n\n' + g + h.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} + ${f.toFixed(6)} + ${h.toFixed(6)} = ` + (b + d + f + h).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d + f + h) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 2) {
                a = `(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 6 = `;
                b = ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 6;
                c = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck}) * 4 = `;
                d = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * 4;
                e = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck}) = `;
                f = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck));
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + e + f.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} + ${f.toFixed(6)} = ` + (b + d + f).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d + f) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 3) {
                a = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck}) * 4 = `;
                b = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * 4;
                c = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck}) = `;
                d = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck));
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} = ` + (b + d).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 4) {
                a = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck}) = `;
                b = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck));
                atLeastStats = a + b.toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            }
        } else if (totalDraws == 5) {
            if (successfulDraws == 1) {
                a = `(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 5 = `;
                b = ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 5;
                c = `(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 10 = `;
                d = ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 10;
                e = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 10 = `;
                f = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 10;
                g = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck}) * 5 = `;
                h = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * 5;
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + e + f.toFixed(6) + '\n\n' + g.toFixed(6) + h.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} + ${f.toFixed(6)} + ${h.toFixed(6)} = ` + (b + d + f + h).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d + f + h) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 2) {
                a = `(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 10 = `;
                b = ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 10;
                c = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 10 = `;
                d = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 10;
                e = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck}) * 5 = `;
                f = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * 5;
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + e + f.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} + ${f.toFixed(6)} = ` + (b + d + f).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d + f) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 3) {
                a = `(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 10 = `;
                b = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 10;
                c = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck}) * 5 = `;
                d = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * 5;
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} = ` + (b + d).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 4) {
                a = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck}) * 5 = `;
                b = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * 5;
                atLeastStats = a + b.toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            }
        } else if (totalDraws == 6) {
            if (successfulDraws == 1) {
                a = `(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 6 = `;
                b = ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 6;
                c = `(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 15 = `;
                d = ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 15;
                e = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 20 = `;
                f = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 20;
                g = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 15 = `;
                h = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 15;
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + e + f.toFixed(6) + '\n\n' + g + h.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} + ${f.toFixed(6)} + ${h.toFixed(6)} = ` + (b + d + f + h).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d + f + h) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 2) {
                a = `(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 15 = `;
                b = ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 15;
                c = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 20 = `;
                d = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 20;
                e = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 15 = `;
                f = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 15;
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + e + f.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} + ${f.toFixed(6)} = ` + (b + d + f).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d + f) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 3) {
                a = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 20 = `;
                b = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 20;
                c = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 15 = `;
                d = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 15;
                atLeastStats = a + b.toFixed(6) + '\n\n' + c + d.toFixed(6) + '\n\n' + `${b.toFixed(6)} + ${d.toFixed(6)} = ` + (b + d).toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b + d) * 100).toFixed(2)
                exactPercent = (b * 100).toFixed(2)
            } else if (successfulDraws == 4) {
                a = `(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${num}/${deck})*(${deck - num}/${deck})*(${deck - num}/${deck}) * 15 = `;
                b = ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((num) / (deck)) * ((deck - num) / (deck)) * ((deck - num) / (deck)) * 15;
                atLeastStats = a + b.toFixed(6)
                exactStats = a + b.toFixed(6)
                atLeastPercent = ((b) * 100).toFixed(3)
                exactPercent = (b * 100).toFixed(3)
            }
        }
    }
    document.getElementById('result').innerText = result
    document.getElementById('how').innerText = `Here is one way of calculating:`
    if (exactDraws == 'YES') {
        document.getElementById('stats').innerText = exactStats
        document.getElementById('percentage').innerText = `${exactPercent}% Chance`
    } else if (exactDraws == 'NO') {
        document.getElementById('stats').innerText = atLeastStats
        document.getElementById('percentage').innerText = `${atLeastPercent}% Chance`
    }
}
