const contact = (() => {
    const items = document.createElement("div");
    items.classList = "items";

    const title = document.createElement("h1");
    title.textContent = "Contact Us";

    const element = document.createElement("div");
    element.classList = "item";
    element.innerHTML = "<p>Ajay</p>"
    const elementContent = document.createElement("div");
    elementContent.classList = "contact";
    elementContent.innerHTML = `<p>Phone: 123-456-789</p>
                                <p>Email: ajay@mail.com</p>`;
    element.appendChild(elementContent);

    items.append(title);
    items.append(element);

    return items;
})();

export {contact};