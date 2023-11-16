let pizzaPlace;
let numberOfToppings;

pizzaPlace = "Pizza Cat's Galactic Pizzaria";

numberOfToppings = 4;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

let about = `Welcome to ${pizzaPlace}, the finest pizza on the dark side of the Moon featuring ${numberOfToppings} amazing toppings!`;

console.log(about);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else if (numberOfToppings > 10) {
  console.log("A whole lot of pizza.");
} else {
  console.log("Galactic Law Prohibits the use of 10 topping pizzas.");
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
