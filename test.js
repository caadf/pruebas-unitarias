const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One dollar should be 156.5 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromDollarToYen(1.07);
    const expected = 1.07 * 156.5;
    expect(fromDollarToYen(1.07)).toBe(167.455); 
})

test("One yen should be 0.87 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const dollars = fromYenToPound(156.5);
    const expected = 156.5 * 0.87;
     expect(fromYenToPound(156.5)).toBe(136.155); 
})




