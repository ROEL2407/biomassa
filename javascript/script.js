const targetDiv = document.getElementById("explanation");
document.getElementById('button').onclick = function() {
    targetDiv.classList.toggle("hidden");
}

document.getElementById('x').onclick = function() {
    targetDiv.classList.toggle("hidden");
}

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
            origin: item.origin,
            class: item.class
        });
    });

    showInfo(itemArray);
}

function showInfo(data) {
    data.forEach(item => {
        tempItem = document.createElement('section');
        tempItem.classList.add('info-box', "hidden", item.class);

        output = '<p class="name">Name: ' + item.name + '</p><p class="info_cat">Category: ' + item.category + '</p>';
        if (item.wiki !== undefined) {
            output += '<p class="wiki_link">Wiki page: ' + item.wiki + '</p>';
        } else {
            output += '<p class="wiki_link"> </p>';
        }
        output += '<p class="origin">Origin(s): ' + item.origin + '</p><p class="base">Base: ' + item.base + '</p>';

        tempItem.innerHTML = output;
        document.getElementById('info_boxes').appendChild(tempItem);
    })
}

function infoboxes() {
    let clickId = "init";
    const onClick = (event) => {
        if (event.target.nodeName === 'g') {
            clickId = event.target.id;
        } else if (event.target.nodeName === 'text') {
            clickId = event.target.parentNode.id;
        } else if (event.target.nodeName === 'tspan') {
            clickId = event.target.parentNode.parentNode.id;
        }

        let classHolder = document.getElementsByClassName(clickId);
        console.log(classHolder);
        let reset = document.getElementsByClassName("info-box");
        if (classHolder !== undefined) {
            for (i = 0; i < classHolder.length; i++) {
                classHolder[i].style.display = "block";
            }
        }

        for (j = 0; j < reset.length; j++) {
            if (!reset[j].classList.contains(clickId)) {
                reset[j].style.display = "none";
            }
        }
    }
    window.addEventListener('click', onClick);
}
infoboxes();

function getData(url) {
    // return every fetch
    return fetch(url)
        .then(response => response.json())
        .then(data => data);
}
fetching();