function visible_comment_panel() {
    var container = document.querySelector(".recipe_viewer");
    var targetElement = document.querySelector(".recipe_viewer_bottom > span");

    const recipe_viewer_send_comment_panel = document.querySelector(".recipe_viewer_send_comment_panel");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= container.clientHeight &&
            rect.right <= container.clientWidth
        );
    }

    function handleScroll() {
        if (isElementInViewport(targetElement)) {
            recipe_viewer_send_comment_panel.classList.add("active");
        } else {
            recipe_viewer_send_comment_panel.classList.remove("active");
        }
    }
        
    container.addEventListener("scroll", handleScroll);
}
visible_comment_panel();