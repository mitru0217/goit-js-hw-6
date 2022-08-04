const ulRef = document.querySelector('#categories');
const liRef = ulRef.querySelectorAll(".item");
console.log('Number of categories:', liRef.length);

liRef.forEach(
   function (li) {
    console.log("Category:", li.firstElementChild.textContent)
    console.log("Elements:", li.querySelectorAll('li').length)
   }
);