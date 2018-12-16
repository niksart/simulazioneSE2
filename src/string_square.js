
function string_square(s) {
    if (typeof s == 'string') {
        return Math.pow(s.length, 2);
    }

    return -1;
}

module.exports = string_square;
