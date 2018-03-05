import '../style/style.css'

const url = 'https://newsapi.org/v2/top-headlines?' +
            'country=ru&' +
            'category=technology&' +
            'apiKey=94d80f877d70435eafbc7f57e02da2a5';

let News = function(url) {
    this.url = url
}

News.prototype = {
    createShowButton: function() {
        let that = this;
        let show_news = document.createElement("button");

        show_news.textContent = "Show News";
        document.body.appendChild(show_news);

        show_news.addEventListener("click", function () {
            import('./lib/create_news').then(create_news => {
                if (process.env.NODE_ENV !== 'production') {
                    console.log('Development mode');
                }

                that.createRequest(create_news);
            });
        });
    },

    createRequest: function(create_news) {
        let request = new Request(this.url);
        
        fetch(request)
            .then((response) => response.json())
            .then(function (feed) {
                feed.articles.filter((article) => article.description != null).map(create_news.createNews);
            });
    }
}

function run() {
    let news = new News(url);
    news.createShowButton();
};

run();


