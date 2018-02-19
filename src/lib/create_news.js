export { createNews };

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

        return { header, link, entry, image, description };
    }

    function addChildren() {
        header.appendChild(link);
        entry.appendChild(header);
        entry.appendChild(image);
        entry.appendChild(description);
        document.body.appendChild(entry);
    }

    var { header, link, entry, image, description } = createElements();

    addChildren();
}