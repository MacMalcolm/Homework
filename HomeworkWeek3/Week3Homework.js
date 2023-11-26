const CatasticToppings = [        // Toppings available array setting
  "Anchovies",
  "Mouse",
  "Goldfish",
  "GrassBird",
  "Chicken",
  "RatTail",
  "TunaFish",
  "Gravy",
  "Catnip",
  "MysteryRedDot"
];

function greetCustomer(Toppings) {
  console.log(
    "Welcome to Galactic Cat's Pizza Station, the only pizza parlor that has:"
  );
  for (let Topping of Toppings) {   // Determines if on last topping to have good grammer for output
    if (Topping !== "MysteryRedDot") console.log(Topping);
    else console.log("And of course our famous " + Topping);
  }
}

function customerOrder() {
  let Order = [];
  Order[0] = prompt(`"What size pizza would you like? We got Large(18"), Medium(14"), or Small(10")."`); // Builds first array slot with size
  Order[1] = prompt(`"Alright, how would you like the crust? Kneaded or Paw-Tossed`);                    // Builds second array slot with crust type
  let numberOfToppings = prompt(`"How many toppings are we throwing on here for ya?"`);                  // Determines how many toppings to ask about
  if (numberOfToppings>4) {
    console.log("Listen buddy, if you wanna taste the pizza, keep it to 4 toppings kapeesh.")            // Setting max topping amount
    numberOfToppings = 4;
  }
  else if (numberOfToppings <= 0) {
    console.log("Wise guy eh? Yo Joey, this one wants a plain Jane pizza!");    // Error handling, ensuring an empty slot.
    numberOfToppings = 0;
  }
  let getTop = 0;
  for (i=0;i<numberOfToppings;i++) {      // Loop for proper grammer when asking for topping selection
    switch (i) {
      case 0:
        getTop = "first"
        break;
        case 1:
          getTop = "second"
          break;
          case 2:
            getTop = "third"
            break;
            case 3:
              getTop = "fourth"
              break
    }
    Order.push(prompt(`"What's the ${getTop} topping?"`));
  }
  console.log(Order);
  if (Order[0] !== ("Large" || "large" || "Medium" || "medium" || "Small" || "small" || `"18""` || `"14""` || `"10""` ))  // Error handling, input validation
    Order[0] = "Medium";
  if (Order[1] !== ("Kneaded" || "kneaded" || "Paw-Tossed" || "paw-tossed"))    // Error handling, input validation
    Order[1] = "Paw-Tossed";
  let topping = "Checking";
  for (i2=0; i2<numberOfToppings; i2++) {
    topping = "Checking";
  for (i3=0 ; i3<CatasticToppings.length+1; i3++) {   // Error handling, input validation. Loop checks selected toppings against available toppings array.
  if (Order[2+i2] === CatasticToppings[i3] )
  topping = "Good";
  }
  if (topping !== "Good")
  Order[2+i2] = "Cheese";
  }
  return Order;
}

function getPizzaOrder( //Error handling, ensures minimum value setting
    Size = "medium",
    Crust = "Paw-Tossed",
    Topping = "just cheese",
    ...additionalToppings)  // Incase there are more toppings than expected
    {
console.log(`"Aye-OH! We got a ${Size} ${Crust} pizza with ${Topping}, ${additionalToppings} coming right up!"`);  // Use "${var}" when in a string literal, otherwise + var +.
return PizzaArray = [Size, Crust, Topping,...additionalToppings];
}

function preparePizza(PizzaArray) {
  console.log("*waves pinched fingers* Hey buddy, the Pizza's cooking huh?")  
  const Pizza = {};
    Pizza.size = PizzaArray[0];
    Pizza.crust = PizzaArray[1];
    Pizza.toppings = PizzaArray.slice(2, PizzaArray.length+1) // Includes all values in array between # , and #
    return Pizza;
}

function serverPizza(PizzaObject) {
  console.log("Hey you's, the pizza's ready. Come grab your " + PizzaObject.size + " " + PizzaObject.crust + " " + PizzaObject.toppings + " pizza!");
return PizzaObject;
}


greetCustomer(CatasticToppings);  // Greeting message and Toppings list
serverPizza(preparePizza(getPizzaOrder(...customerOrder())));   // Cascading functions to input output input output etc.