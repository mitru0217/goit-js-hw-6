const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemContainer = document.querySelector("#ingredients");

const elements = ingredients.map(ingredient => {
const itemEl = document.createElement("li");
itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  
  return itemEl;
})

itemContainer.append(...elements);