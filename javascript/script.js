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
    showCat(itemArray);
}



// let node = g
//     .selectAll(".cls-2")
//     .on("click", click);


// function click(d) {
//     d3.select("#tooltip")
//         .transition()
//         .duration("50")
//         .attr("opacity", ".85")
//         .style("opacity", 1)

//     if (d.data.origin != null) {
//         d3.select("#origin").text("Origin: " + `${d.data.origin}`);
//         d3.select("#base").text("Base: " + `${d.data.base}`);
//     } else {
//         d3.select("#origin").text(" ");
//         d3.select("#base").text(" ");
//     }

//     if (d.data.functions != null) {
//         d3.select("#functions").text("Functions: " + `${d.data.functions}`);
//     } else if (d.data.children[0].functions != null) {
//         d3.select("#functions").text(
//             "Functions: " + `${d.data.children[0].functions}`
//         );
//     } else if (d.data.children[0].children[0].functions != null) {
//         d3.select("#functions").text(
//             "Functions: " + `${d.data.children[0].children[0].functions}`
//         );
//     } else {
//         d3.select("#functions").text(" ");
//     }
// }
// let tooltip = d3
//     .select(".info-box")
//     .append("div")
//     .attr("id", "tooltip")
//     .attr("class", "hidden");

function showInfo(data) {
    data.forEach(item => {
        tempItem = document.createElement('section');
        tempItem.classList.add('info-box', "hidden", item.class);

        output = '<p id="name">' + item.name + '</p><p id="info_cat">' + item.category + '</p>';
        if (item.wiki !== undefined) {
            output += '<p id="wiki_link">' + item.wiki + '</p>';
        }
        else {
            output += '<p id="wiki_link"> </p>';
        }
        output += '<p id="origin">' + item.origin + '</p><p id="base">' + item.base + '</p>';

        tempItem.innerHTML = output;
        document.getElementById('info_boxes').appendChild(tempItem);
    })
}
function infoboxes() {
let clickId = "init";
const onClick = (event) => {
    if ( event.target.nodeName === 'text') {
      clickId = event.target.id;
    }
    else if (event.target.nodeName === 'tspan') {
        clickId = event.target.parentNode.id;
    }
    
    let classHolder = document.getElementsByClassName(clickId);
    console.log(classHolder);
    let reset = document.getElementsByClassName("info-box");
    if(classHolder !== undefined){
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

function showCat(data) {
    // let catArray = [];
    // const base = 
    // console.log(catArray);
    // data.forEach((data) => {
    //     const category = data.category;
    //     if(!catArray.includes(category)){
    //         catArray.push ({
    //             Category: data.category
    //         });
    //     }
    //     else {
    //         console.log("a")
    //     }
    //     console.log(1);
    // })
    // console.log(catArray);
}

function getData(url) {
    // return every fetch
    return fetch(url)
        .then(response => response.json())
        .then(data => data);
}
fetching();