function Pizza (topping, size) {
  this.topping = topping;
  this.size = size;
};

Pizza.prototype.addSize = function() {
  var total = 5;
  if (this.size === "5") { //small
    total = total;
  } else if (this.size === "6") { //med
    total += 1;
  } else if (this.size === "7") { //large
    total += 2;
  } else if (this.size === "8") { //fs
    total += 3;
  }
  return total;
};

Pizza.prototype.addToppings = function() {
  var total = this.addSize;
  if (this.topping === "Olives" || this.topping === "Mushrooms" || this.topping === "Pinapple" ||) {
    total += 2;
  }
}
