const search = document.querySelector(".search");
const wrap_search = document.querySelector(".wrap_search");
const event_background = document.querySelector(".event_background");

const search_input = document.querySelector('.search_input');

const search_info_text = document.querySelector(".search_info_text");
const search_result = document.querySelector(".search_result");
const search_result_data = document.querySelector(".search_result_data");


search.onclick = function() {
  this.classList.add("active_Search");
  wrap_search.classList.add("active");
  event_background.classList.add("active");

  search_input.setAttribute('contenteditable', 'true');

  search_info_text.classList.add("active");
}

event_background.onclick = function() {
  search.classList.remove("active_Search");
  wrap_search.classList.remove("active");
  this.classList.remove("active");

  search_input.setAttribute('contenteditable', 'false');

  search_info_text.classList.remove("active");
  search_result.classList.remove("active");

  event_background.classList.remove("active_open_popover");
}


function validDataInput() {
  if (!search_input
    || search_input.textContent.trim() === "Найти рецепты по продуктам"
    || search_input.textContent.trim() === "Введите корректный запрос"
    || search_input.textContent.trim() === "")
    {
    search_input.textContent = "Введите корректный запрос";
    search_result.classList.remove("active");
    return;
  }

  search_result.classList.remove("active");
  setTimeout(function() {
    search_result.classList.add("active");
  }, 300);

  return true;
}

function searchRecipes() {
  if (validDataInput()) {

    /**
     *  Поисковые запросы
     */
    
  }
}


function updateWidthInputGramm() {
  var grammInfo = this.closest(".gramm_info");
  var input = grammInfo.querySelector("input");

  input.style.width = (input.value.length * 13) + 'px';
}

function deleteGramm() {
  var parentDiv = this.closest(".select_ingridient");
  var textContent = parentDiv.textContent;
  var textNode = document.createTextNode(textContent);

  parentDiv.parentNode.replaceChild(textNode, parentDiv);
}

// Выделение ингридиента, выставление грамовки
search_input.onmouseup = function highlightText(event) {
  if (event.ctrlKey) {
    var additionalElement = document.createElement("div");

    var range = getSelection().getRangeAt(0);
    var span = document.createElement("div");
    span.className = "select_ingridient";

    span.appendChild(additionalElement);

    range.surroundContents(span);
    range.insertNode(span);

    span.innerHTML += `
      <span class="gramm_info">
        <input class="gramm" value="0" oninput="updateWidthInputGramm.call(this)" />
        <svg class="delete_gramm" onclick="deleteGramm.call(this)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.021 512.021" style="enable-background:new 0 0 512.021 512.021;" xml:space="preserve" width="512" height="512">
          <g>
            <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/>
          </g>
        </svg>
      </span>
    `;

  }
}


// Запрет на создание новой строки в поисковом поле
search_input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    
    searchRecipes();
  }
});

search_input.addEventListener("paste", function(event) {
  event.preventDefault();
  
  const text = (event.clipboardData || window.clipboardData).getData("text").replace(/\n/g, "");
  document.execCommand("insertHTML", false, text);
});