// The Recipe Card
// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for a title (a string), a number of servings, and ingredients (an array of strings).

// On separate lines log the recipe information so it looks like this:

// Ginger, Apple and Banana Smoothie

// Serves: 2

// Ingredients:

// - 500ml Milk
// - 2/3 cups of vanilla protein powder
// - 2 tbs rolled oats
// - Pinch of cinnamon
// - 2 cups of baby spinach leaves
// - 2 frozen bananas
// - 2 roughly chopped apples
// - 1/2 avocado
// - 2 tsp fresh ginger
// - 6 ice cubes
// Note: That is actually a very nice smoothie
const recipe = {
  title: "Ginger, Apple and Banana Smoothie",
  numberOfServing: 2,
  ingredients: [
    "500ml Milk",
    "2/3 cups of vanilla protein powder",
    "2 tbs rolled oats",
    "Pinch of cinnamon",
    "2 cups of baby spinach leaves",
    "2 frozen bananas",
    "2 roughly chopped apples",
    "1/2 avocado",
    "2 tsp fresh ginger",
    "6 ice cubes",
  ],
};

console.log(`${recipe.title}`);
console.log(`Serves: ${recipe.numberOfServing}`);
console.log("Ingredients:");

for (let i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}
