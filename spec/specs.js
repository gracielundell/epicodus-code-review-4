describe("Pizza", function() {
  it("will initialize a pizza with default topping", function() {
    var testPizza = new Pizza("olives", "small");
    expect(testPizza.topping).to.equal("olives");
    expect(testPizza.size).to.equal("small");
  });

  // it("will allow multiple topping choices to be applied", function() {
  //   var testPizza = new Pizza("")
  // })

});
