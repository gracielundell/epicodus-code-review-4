describe("Pizza", function() {
  it("will initialize a pizza with default topping", function() {
    var testPizza = new Pizza("olives", "small");
    expect(testPizza.topping).to.equal("olives");
    expect(testPizza.size).to.equal("small");
  });

  it("will calculate price for a full pizza", function() {
    var testPizza = new Pizza("olives", "small")
    expect(testPizza.fullPizza).to.equal(7);
  });

});
