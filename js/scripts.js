function Pizza (pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = pizzaToppings;
};


Pizza.prototype.price = function() {
  var total = 5;

  if(this.pizzaSize === "small") {
    total = total + (this.toppings.length * 2);
  } else if(this.pizzaSize === "medium") {
    total += 5 + (this.toppings.length * 2);
  } else if(this.pizzaSize === "large") {
    total += 7 + (this.toppings.length * 2);
  };
  console.log("total cost: $", total);
  return total;
};


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("select.size").val();
    var pizzaToppings = [];
    $("input:checked").each(function() {
      pizzaToppings.push($(this).val());
    });
    var createPizza = new Pizza(pizzaSize, pizzaToppings);

    $("p#customPizza").append(("<span class='pizzaPrice'>" + createPizza.price()) + ".00" + "</span>");

  });

});
