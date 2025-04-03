const menu = (() => {

    const addFood = ((food, text) => {
        const item = document.createElement("div");
        item.innerHTML = `<p>${food}</p>`;
        const itemContent = document.createElement("div");
        itemContent.classList = "text";
        itemContent.textContent = text
        item.appendChild(itemContent);
        return item;
    })

    const items = document.createElement("div");
    items.classList = "items";

    const title = document.createElement("h1");
    title.textContent = "Menu";

    // Dishes
    const dishesTitle = document.createElement("h2");
    dishesTitle.textContent = "Dishes";
    const dishes = document.createElement("div");
    dishes.classList = "food";

    const lasagna = addFood("Lasagna", "Vegan lasagna with mushrooms and tofu");
    dishes.append(lasagna);

    const curry = addFood("Curry", "Vegan curry with massala");
    dishes.append(curry);

    // Drinks
    const drinksTitle = document.createElement("h2");
    drinksTitle.textContent = "Drinks";
    const drinks = document.createElement("div");
    drinks.classList = "food";
    
    const wine = addFood("Wine", "Red wine");
    drinks.append(wine);

    const caipirinha = addFood("Caipirinha", "Caipirinha cocktail")
    drinks.appendChild(caipirinha);

    items.append(title);
    items.append(dishesTitle);
    items.append(dishes);
    items.append(drinksTitle);
    items.append(drinks);


    return items;
})();

export {menu};