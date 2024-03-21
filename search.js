document.getElementById("search-button").addEventListener("click", function() {
    var query = document.getElementById("search-box").value.trim().toLowerCase();
    if (query === "") {
        return;
    }

    var results = [];
    links.forEach(function(link) {
        if (link.title.toLowerCase().includes(query) || link.description.toLowerCase().includes(query)) {
            results.push(link);
        }
    });

    var resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = "";
    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    } else {
        results.forEach(function(result) {
            var resultElement = document.createElement("div");
            resultElement.classList.add("result");
            resultElement.innerHTML = "<a href='" + result.url + "'>" + result.title + "</a> - " + result.description;
            resultsContainer.appendChild(resultElement);
        });
    }
});
