
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
                    functions: item.function
                });
            });
            console.log(catArray);
            showCategory(catArray);
    }

    function showCategory(data) {
        data.forEach(item => {
            tempCat = document.createElement('a');
            tempCat.classList.add(item.class, 'cat-hexagon');
            
            tempCat.innerHTML = '<p>' + item.name + '</p>';
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


