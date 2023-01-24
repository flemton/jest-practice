const difference = require('./difference.js');

test('subracts 10 - 8 to equal 2', () => {
    expect(difference(10, 8)).toBe(2);
});

test('subtracts 473 - 234 to equal 239', () => {
    expect(difference(473, 234)).toBe(239);
});