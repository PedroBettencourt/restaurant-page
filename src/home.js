const home = (() => {
    const items = document.createElement("div");
    items.classList="items";
    
    const title = document.createElement("h1");
    title.textContent = "Ajay's Restaurant";

    const description = document.createElement("div");
    description.classList = "item";
    description.innerHTML = "<p>Description</p>"
    const descriptionContent = document.createElement("div");
    descriptionContent.classList = "text";
    descriptionContent.textContent = "This is a vegan restaurant where food doesn't come from animal exploitation"
    description.appendChild(descriptionContent);

    const timetable = document.createElement("div");
    timetable.classList = "item";
    timetable.innerHTML = "<p>Hours</p>";
    const timetableContent = document.createElement("div");
    timetableContent.classList = "text"
    timetableContent.innerHTML = `<p>Monday: Closed</p>
                                  <p>Tueday: 10am - 10pm</p>
                                  <p>Wednesday: 10am - 10pm </p>
                                  <p>Thursday: Closed</p>
                                  <p>Friday: 10am - 12am </p>
                                  <p>Saturday: 10am - 12am </p>
                                  <p>Sunday: 10am - 10pm</p>`;
    timetable.appendChild(timetableContent);

    const location = document.createElement("div");
    location.classList = "item"
    location.innerHTML = "<p>Location</p>";
    const locationContent = document.createElement("div");
    locationContent.classList = "text";
    locationContent.textContent = "123 Street, AjayVille";
    location.appendChild(locationContent);

    items.appendChild(title);
    items.appendChild(description);
    items.appendChild(timetable);
    items.appendChild(location);
    
    return items;
})();

export {home};