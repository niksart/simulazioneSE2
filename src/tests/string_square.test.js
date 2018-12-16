const string_square = require('../string_square');

test('Passando una non-stringa (numero) deve ritornare -1', () => {
    expect(string_square(4)).toBe(-1);
});

test('Passando una non-stringa (array di stringhe) devo ritornare -1', () => {
    expect(string_square(["1","2","3"])).toBe(-1);
});

test('Passando una non-stringa (undefined) devo ritornare -1', () => {
    expect(string_square(undefined)).toBe(-1);
});

test('Passando una stringa vuota deve ritornare 0', () => {
    expect(string_square("")).toBe(0);
});

test('Passando la parola gatto deve ritornare 25', () => {
    expect(string_square("gatto")).toBe(25);
});

