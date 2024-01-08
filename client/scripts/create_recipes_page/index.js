function updateWidthInputGrammLi() {
  this.style.width = (this.value.length * 10) + 'px';
}

function handleCheckboxChange() {
  var inputElement = this.parentElement.querySelector(".ingridient_li_input");
  if (this.checked) {
    inputElement.classList.add("active");
  } else {
    inputElement.classList.remove("active");
  }
}


function handleImageChange(fileInput) {
  const pickerImage = document.querySelector(".picker_image");
  var file = fileInput.files[0];

  if (file) {
    var reader = new FileReader();

    reader.onload = function (e) {
      pickerImage.style.backgroundImage = `url(${e.target.result})`;
      pickerImage.style.backgroundSize = "cover";
    };

    reader.readAsDataURL(file);
  }
}


function load_picker_ingredients_data() {
  fetch("/improvised_data/ingredients.json")
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка при загрузке файла');
    }
    return response.json();
  })
  .then(parse => {
    const list_picker_ingredients_popover = document.getElementById("list_picker_ingredients_popover");

    if (list_picker_ingredients_popover) {
      for (var i = 0; i < parse.length; i++) {
        const data = parse[i];

        if (!document.getElementById(data.id)) {
          list_picker_ingredients_popover.innerHTML += `
            <li class="ingridient_li">
              <input type="checkbox" id="${data.id}" hidden onchange="handleCheckboxChange.call(this)">
              <label for="${data.id}">
                ${data.ingredient}
                <input class="ingridient_li_input" value="0" oninput="updateWidthInputGrammLi.call(this);" />
              </label>
            </li>
          `;
        }
      }
    }
  })
  .catch(error => {
    console.error('Произошла ошибка:', error.message);
  });
}


function picker_ingredients_popover_open() {
  event_background.classList.add("active");
  event_background.classList.add("active_open_popover");

  load_picker_ingredients_data();
}


function send_read_recipe() {
  const picker_image = document.getElementById("picker_image");
  const list_picker_ingredients_popover = [];
  const title_recipes = document.getElementById("title_recipes");
  const description_recipes = document.getElementById("description_recipes");
}