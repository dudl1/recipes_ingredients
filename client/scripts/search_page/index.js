const data_card_author_popover = (
    author_name
)=> {
    fetch("/improvised_data/authors.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка при загрузке файла');
        }
        return response.json();
    })
    .then(parse => {
        const author_name_true = parse.find(author => author.author_name === author_name);

        const total_recipes_number = document.getElementById("total_recipes_number");

        total_recipes_number.innerText = author_name_true.recipes.length;
    })
    .catch(error => {
        console.error('Произошла ошибка:', error.message);
    });
}


function load_authors_data() {
    fetch("/improvised_data/authors.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при загрузке файла');
            }
            return response.json();
        })
        .then(parse => {
            const recipes = document.getElementById('recipes');
            const load_top_authors = document.getElementById('load_top_authors');

            if (recipes && load_top_authors) {
                parse.slice(0, 5).forEach(data => { // Загружаем только первые 5 элементов
                    data.recipes.slice(0, 1).forEach(recipe => {
                        recipes.innerHTML += `
                            <a
                                class="card_recipe" href="/client/pages/view_recipe.html?author_name=${data.author_name}&recipes_id=${recipe.id}"
                                style="background-image: url(${recipe.recipe_image})">
                                <div class="card_recipe_description">
                                    <span class="card_recipe_title">${recipe.recipe_title}</span>
                                    <div>
                                        <div class="img_author" style="background-image: url(${data.author_image})"></div>
                                        <span>${data.author_name}</span>
                                    </div>
                                </div>
                            </a>
                        `;
                    });
    
                    load_top_authors.innerHTML += `
                        <button class="card_author" popovertarget="card_author_popover" onclick="card_author_popover_open.call(this)">
                            <div class="img_author" style="background-image: url(${data.author_image})"></div>
                            <span class="card_author_name">${data.author_name}</span>
                        </button>
                    `;
                });
            }

        })
        .catch(error => {
            console.error('Произошла ошибка:', error.message);
        });
}
load_authors_data();

function load_ingredients() {
    fetch("/improvised_data/ingredients.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при загрузке файла');
            }
            return response.json();
        })
        .then(parse => {
            const card_products = document.getElementById('card_products');

            if (card_products) {
                for (var i = 0; i < Math.min(5, parse.length); i++) { // Загружаем только первые 5 элементов
                    const data = parse[i];
                    card_products.innerHTML += `
                        <div class="card_product">
                            <div class="img_products" style="background-image: url(${data.image})"></div>
                            <span>${data.ingredient}</span>
                        </div>
                    `;
                }
            }
        })
        .catch(error => {
            console.error('Произошла ошибка:', error.message);
        });
}
load_ingredients();


function card_author_popover_open() {
    event_background.classList.add("active");
    event_background.classList.add("active_open_popover");
  
    const card_author_name = this.querySelector('.card_author_name').textContent;
  
    data_card_author_popover(card_author_name);
  
    const card_author_header = document.querySelector(".card_author_header");
  
    card_author_header.innerText = card_author_name;
}