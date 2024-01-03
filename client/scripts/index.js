// Функция, которая отобразит выпадающий список
/*function showDropdown(event) {
    event.preventDefault();
    var dropdown = document.getElementById('dropdown');
    dropdown.style.display = 'block';
    dropdown.style.left = event.clientX + 'px';
    dropdown.style.top = event.clientY + 'px';
}

  // Функция, которая скроет выпадающий список
function hideDropdown() {
    var dropdown = document.getElementById('dropdown');
    dropdown.style.display = 'none';
}

  // Событие для показа выпадающего списка при нажатии правой кнопки мыши
document.addEventListener('contextmenu', showDropdown);

  // Событие для скрытия выпадающего списка при клике в любом месте экрана
document.addEventListener('click', hideDropdown);*/


// Доюавление элемента в список
/*var fontElement = document.getElementById("selectedIngredient");
var selectElement = document.getElementById("ingredients");

selectElement.addEventListener("change", function() {
  var selectedValue = selectElement.options[selectElement.selectedIndex].value;

  if (fontElement.innerHTML.indexOf(selectedValue) === -1) {
      fontElement.innerHTML = fontElement.innerHTML.replace("Выбери продукты", "") + selectedValue + " ";
  }
});*/


// Активация поля поиска рецептов
const search = document.querySelector(".search");
search.onclick = function() {
  
}