fetch("../json/dataset.json")
    .then(function (response) {
        // The JSON data will arrive here
        return response.json();
    })
    .then(function (data) {
        // Functions will be executed here
        test(data);
    })
    .catch(function (err) {
        // If an error occured, it will be catched here
        console.log(err);
    });

    function test (data) {
        console.log(data)
    }