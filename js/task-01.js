const ulRef = document.querySelector('#categories');
const liRef = ulRef.querySelectorAll(".item");
console.log('Number of categories:', liRef.length);

const animalRef = ulRef.firstElementChild;
console.log("Category:", animalRef.firstElementChild.textContent);
console.log("Elements:", animalRef.querySelectorAll('li').length);

const productsRef = ulRef.children[1];
console.log("Category:", productsRef.firstElementChild.textContent);
console.log("Elements:", productsRef.querySelectorAll('li').length);

const technologiesRef = ulRef.lastElementChild;
console.log("Category:", technologiesRef.firstElementChild.textContent);
console.log("Elements:", technologiesRef.querySelectorAll('li').length);