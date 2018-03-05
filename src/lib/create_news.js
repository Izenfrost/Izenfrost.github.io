export { createNews };

function ElementsFactory(article) {
    this.createElement = function (type) {
        let element;
 
        if (type === "entry") {
            element = document.createElement("figure");
            element.className = "news";
        } else if (type === "header") {
            element = document.createElement("h2");
        } else if (type === "link") {
            element = document.createElement("a");
            element.href = article.url;
            element.textContent = article.title;
        } else if (type === "image") {
            element = document.createElement("img");
            element.src = article.urlToImage;
            element.alt = article.title;
        } else if (type === "description") {
            element = document.createElement("figcaption");
            element.className = "caption";
            element.textContent = article.description;
        }

        return element;
    }
}

function createNews(article) {
    function addChildren() {
        header.appendChild(link);
        entry.appendChild(header);
        entry.appendChild(image);
        entry.appendChild(description);
        document.body.appendChild(entry);
    }

    let elementsFactory = new ElementsFactory(article)

    let header = elementsFactory.createElement("header")
    let link = elementsFactory.createElement("link")
    let entry = elementsFactory.createElement("entry")
    let image = elementsFactory.createElement("image")
    let description = elementsFactory.createElement("description")

    addChildren();
}

