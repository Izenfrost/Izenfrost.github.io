import '../style/style.css'

var show_news = document.createElement("button");
show_news.textContent = "Show News";
document.body.appendChild(show_news);

show_news.addEventListener("click", function () {
    import('./lib/create_news').then(create_news => {
        if (process.env.NODE_ENV !== 'production') {
            console.log('Development mode');
        }

        var url = 'https://newsapi.org/v2/top-headlines?' +
            'country=ru&' +
            'category=technology&' +
            'apiKey=94d80f877d70435eafbc7f57e02da2a5';

        var request = new Request(url);

        fetch(request)
            .then((response) => response.json())
            .then(function (feed) {
                feed.articles.filter((article) => article.description != null).map(create_news.createNews);
            });
    });
});