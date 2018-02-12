"use strict";

function createNews(article) {
    function createElements() {
        var entry = document.createElement("figure");
        entry.className = "news";

        var header = document.createElement("h2");

        var link = document.createElement("a");
        link.href = article.url;
        link.textContent = article.title;

        var image = document.createElement("img");
        image.src = article.urlToImage;
        image.alt = article.title;

        var description = document.createElement("figcaption");
        description.className = "caption";
        description.textContent = article.description;

        return { header: header, link: link, entry: entry, image: image, description: description };
    }

    function addChildren() {
        header.appendChild(link);
        entry.appendChild(header);
        entry.appendChild(image);
        entry.appendChild(description);
        document.body.appendChild(entry);
    }

    var _createElements = createElements(),
        header = _createElements.header,
        link = _createElements.link,
        entry = _createElements.entry,
        image = _createElements.image,
        description = _createElements.description;

    addChildren();
}

var url = 'https://newsapi.org/v2/top-headlines?' + 'country=ru&' + 'category=technology&' + 'apiKey=94d80f877d70435eafbc7f57e02da2a5';

var request = new Request(url);

fetch(request).then(function (response) {
    return response.json();
}).then(function (feed) {
    feed.articles.filter(function (article) {
        return article.description != null;
    }).map(createNews);
});