describe("Pizza", function() {
  it("will initialize a pizza with size and number of toppings", function() {
    var testPizza = new Pizza("small", 3, 2);
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.toppings).to.equal(3);
    expect(testPizza.numOfPizzas).to.equal(2);
  });

  it("will tally up price of pizza(s)", function() {
    var testPizza = new Pizza("large", 4, 1);
    expect(testPizza.price).to.equal(23);
  });
});
