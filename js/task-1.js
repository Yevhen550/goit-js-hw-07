const listCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${listCategories.length}`);

listCategories.forEach(el => {
  console.log(
    `Category: ${el.firstElementChild.textContent}
     Elements: ${el.lastElementChild.children.length}`
  );
});
