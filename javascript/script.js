
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
                    category: item.category,
                    subcategory: item.subcategory,
                    functions: item.functions,
                    base: item.base,
                    origin: item.origin
                });
            });
            console.log(itemArray);
            showData(itemArray);
            showCat(itemArray);
    }

    function showData(data) {
        data.forEach(item => {
            tempItem = document.createElement('section');
            tempItem.classList.add(item.base, 'item');
            
            tempItem.innerHTML = `<div class="dot" ></div>
            <p>` + item.name + '</p>';
            
            ;
            document.getElementById('wrapper').appendChild(tempItem);
        })
    }

    function showCat(data) {
        let catArray = [];
        const base = 
        console.log(catArray);
        data.forEach(item => {
            const category = item.category;
            if(!catArray.includes(category)){
                catArray.push ({
                    Category: item.category
                });
            }
            else {
            }
            console.log(1)
        })
        console.log(catArray);
    }

    function getData(url) {
        // return every fetch
        return fetch(url)
            .then(response => response.json())
            .then(data => data);
    }
    fetching();


