function Pizza (size, toppings) {
  this.pizzaSize = size;
  this.toppings = toppings;
};

Pizza.prototype.price = function() {
  var total = 5;

  if(this.pizzaSize === "small") {
    total = total + (this.toppings.length * 1);
    console.log("small price:", total);
  };

  if(this.pizzaSize === "medium") {
    total += 5 + (this.toppings.length * 1);
    console.log("med price:", total);
  };

  if(this.pizzaSize === "large") {
    total += 7 + (this.toppings.length * 1);
    console.log("large price:", total);
  };
  return total;
};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    
    var selectPizzaSize = $("select.size").val();
    var selectPizzaSize = [];
    $("input:checked").each(function {
      selectPizzaSize.push($(this).val());
    });
    var createPizza = new Pizza(selectPizzaSize, selectPizzaToppings);
    console.log("Pizza object: ", pizza);

    $("ul#customPizza").append("<li><span class='pizza'>" + pizza.pizzaPrice) + "</span></li>");
  });
});
