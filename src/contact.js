import "./home.css";

const contact = (() => {
    const items = document.createElement("div");
    items.classList = "items";

    const title = document.createElement("h1");
    title.textContent = "Contact Us";

    items.append(title);

    return items;
})();

export {contact};