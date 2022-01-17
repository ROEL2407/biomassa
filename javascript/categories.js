function fetching() {
    // Fetch init API
    fetch("../json/categories.json")
        .then(response => response.json())
        .then(data => getCatData(data))
}

function getCatData(data) {
    let catArray = [];
    // For each pokemon in results push the pokemon to the array pokemonArray
    data.forEach(item => {
        catArray.push({
            name: item.name,
            class: item.class,
            subcat: item.subcats,
            function: item.function
        });
    });
    showCategory(catArray);
}

function showCategory(data) {
    data.forEach(item => {
        tempCat = document.createElement('a');
        tempCat.classList.add(item.class, 'cat-hexagon');

        // Adds name of the category and starts the functions list
        output = '<p class="cat_title">' + item.name + '</p><p>Functions:</p><ul class="function">';
        // Checks the amount of functions in the list and puts them on teh screen
        for (let i = 0; i < item.function.length; i++) {
            output += '<li>' + item.function[i] + '</li>'
        };
        output += '</ul>';
        // Checks if the name of the category is Polymers, where it counts the amount of subcategories to put on the screen
        if (item.name === "Polymers") {
            output += '<section id="subcat_wrapper">';
            for (let index = 0; index < item.subcat.length; index++) {
                output += '<div class="subcat"><p>' + item.subcat[index] + '</p></div>'
            };
            output += '</section';
        }
        tempCat.innerHTML = output;

        document.getElementById('background-hex').appendChild(tempCat);
    })
}

function getCats(url) {
    // return every fetch
    return fetch(url)
        .then(response => response.json())
        .then(data => data);
}
fetching();