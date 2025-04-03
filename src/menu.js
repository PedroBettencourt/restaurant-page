import "./home.css";

const menu = (() => {
    const items = document.createElement("div");
    items.classList = "items";

    const title = document.createElement("h1");
    title.textContent = "Menu";

    items.append(title);

    return items;
})();

export {menu};