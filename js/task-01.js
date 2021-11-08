const listCategoriesRef = document.querySelector("#categories");
const arrayCategories = [...listCategoriesRef.children];

console.log("Number of categories:", arrayCategories.length);

arrayCategories.forEach(category => {
    console.log("Category: ", category.querySelector("h2").textContent);
    console.log("Elements: ", category.querySelector("ul").children.length);
});


