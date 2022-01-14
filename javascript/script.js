
    function fetching() {
        // Fetch init API
        fetch("../json/dataset.json")
            .then(response => response.json())
            .then(data => getIngredientData(data))
    }

    function getIngredientData(data) {
        let itemArray = [];
            // For each pokemon in results push the pokemon to the array pokemonArray
            data.forEach(item => {
                itemArray.push({
                    name: item.name,
                    base: item.base,
                    origin: item.origin
                });
            });
            console.log(data);
    }

    function getData(url) {
        // return every fetch
        return fetch(url)
            .then(response => response.json())
            .then(data => data);
    }
    fetching();


