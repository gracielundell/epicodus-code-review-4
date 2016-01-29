function Pizza (topping, size, numberOfPizzas) {
  this.topping = topping;
  this.pizzaSize = size;
  this.numberOfPizzas = numberOfPizzas;
};

// Pizza.prototype.addSize = function() {
//   var total = 5;
//   if (this.pizzaSize === "5") { //small
//     total = total;
//   } else if (this.pizzaSize === "6") { //med
//     total += 1;
//   } else if (this.pizzaSize === "7") { //large
//     total += 2;
//   } else if (this.pizzaSize === "8") { //fs
//     total += 3;
//   }
//   return total;
// };

Pizza.prototype.fullPizza = function() {
  var total = 0;
  for (var i = 0; i < this.topping; i++) {
    total += 2; //for every topping, add $3 onto total
  };

  if (this.pizzaSize === "small") {
    total += 5;
  };
  if (this.pizzaSize === "medium") {
    total += 10;
  };
  if (this.pizzaSize === "large") {
    total += 15;
  };
  return total * this.numberOfPizzas; //return order total for two identical pizzas
};
