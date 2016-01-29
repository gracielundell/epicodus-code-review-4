describe("Pizza", function() {
  it("will initialize a pizza", function() {
    var testPizza = new Pizza("olives", "small", "2");
    expect(testPizza.topping).to.equal("olives");
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.numberOfPizzas).to.equal("2");
  });

  it("will calculate price for a full pizza", function() {
    var testPizza = new Pizza("olives", "small")
    expect(testPizza.fullPizza).to.equal(7);
  });
});
