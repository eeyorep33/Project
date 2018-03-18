
const cheerio = require("cheerio")
const request = require("request")
let movie = process.argv[2];
let timer = parseInt(process.argv[3]);
//checks that at least 2 arguments have been entered, that the second argument is a number and positive
if (isNaN(timer) || timer < 0 || process.argv.length < 4) {
    console.log("Error")
    process.exit()
}
//inserts a "-" in between the given movie title so it is formatted correctly for the website scraped for reviews
function split(title) {
    let splitTitle = title.split(" ");
    let pop = splitTitle.pop()
    for (i = 0; i < splitTitle.length; i++) {
        splitTitle[i] += "-"
    }
    splitTitle.push(pop)
    let movieTitle = splitTitle.join("")
    return movieTitle
}
function warning(title, time) {
    console.log("**Spoiler Warning** about to spoil the movie", title, "in", time, "seconds! \n");
}
let wholeTitle = split(movie)
url = "https://google.com/search?q=" + movie + "film"
url2 = "https://www.timeout.com/us/film/" + wholeTitle
//requests API from website and it it called in the setTimeout function
request
    .get("https://api.themoviedb.org/3/search/movie?api_key=4880ee13ff8412dd62f76d64d54d162d&query=" + movie, function (error, response, body) {
        let details = JSON.parse(body)
        warning(movie, timer)
        setTimeout(function () { console.log("SPOILER!!! \n" + details.results[0].overview + "\n") }, timer * 1000);
        console.log("Here is the lastest review and news on ", movie, "!\n")   
        //scrapes website for review on movie           
        request(url2, function (error, response, body) {
            console.log("*******REVIEW******")
            if (!error) {
                let $ = cheerio.load(body);
                const review = [];
                $('#tab___content_1 div article div p').each(function (i, elem) {
                    review[i] = $(this).text();
                    console.log(review[i] + "\n")
                });
            };
        })
        //scrapes google for headlines on movie
        request(url, function (error, response, body) {
            console.log("******NEWS********")
            if (!error) {
                let $ = cheerio.load(body);
                const news = [];
                $('h3').each(function (i, elem) {
                    news[i] = $(this).text();
                    console.log(news[i] + "\n")
                });
            };
        })
    })
    



