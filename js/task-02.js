const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector("#ingredients");

const arrNewElem = ingredients.map(element => {
  const itemRef = document.createElement("li");
  itemRef.classList.add("item");
  itemRef.textContent = element;
  return itemRef;
});

 listRef.append(...arrNewElem); 





