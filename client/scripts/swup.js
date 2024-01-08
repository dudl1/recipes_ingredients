import Swup from 'https://unpkg.com/swup@4?module';

const swup = new Swup();


swup.hooks.on('page:view', (visit) => {
    const page_url = visit.to.url;

    const clean_url = page_url.replace(/\/client\/pages\/|\?.*$/g, "");

    if (clean_url == "search.html") {
        load_authors_data();
        load_ingredients();
    }

    if (clean_url == "view_recipe.html") {
        const urlParams = new URLSearchParams(page_url.split("?")[1]);

        const author_name = urlParams.get("author_name");
        const recipes_id = urlParams.get("recipes_id");

        visible_comment_panel();
    }
});