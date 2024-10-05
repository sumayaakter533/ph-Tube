// TODO - Fetch, Load, and Show Categories on HTML

// ANCHOR - create loadCategories()
const loadCategories = () => {
    // TODO - Fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error));
};

loadCategories();

// ANCHOR - create displayCategories()
const displayCategories = categories => {
    const categoryContainer = document.getElementById('categories');

    categories.forEach(item => {
        // TODO - create a button
        const button = document.createElement('button');
        button.classList = 'btn font-medium text-lg text-secondary bg-accent';
        button.innerText = item.category;

        // TODO - add button to category container
        categoryContainer.append(button);
    });
};

displayCategories();
