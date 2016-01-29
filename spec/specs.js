describe("Pizza", function() {
  it("will initialize a pizza size", function() {
    var testPizza = new Pizza("small");
    expect(testPizza.pizzaSize).to.equal("small");
  });

  it("will tally up price of pizza with two toppings", function() {
    var testPizza = new Pizza("small", ["Mushrooms", "Pineapple"]);
    expect(testPizza.price()).to.equal(9);
  });
});
