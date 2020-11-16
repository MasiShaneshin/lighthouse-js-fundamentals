const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let i = 0
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i = i + 1;
}

for (let u = 0; u < ingredients.length; u++) {
  console.log(ingredients[u]);
}


for (let u = ingredients.length - 1; u >= 0; u--) {
  console.log(ingredients[u]);
}