var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('get', './svg.html', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("svg").innerHTML = xhr.responseText;
    }
}
xhr.send();

// source: https://stackoverflow.com/questions/32938168/using-innerhtml-property-to-display-content-of-another-html-file