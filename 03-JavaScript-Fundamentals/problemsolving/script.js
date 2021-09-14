let currentHeadline = "News in the world today"
const currentArticle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi ut fuga neque soluta veniam, totam enim incidunt. Molestiae voluptatem ipsa a nobis praesentium aliquam quo soluta dolorem eveniet architecto?"

const isFakeNews = false;
const amountOfWords = 957;

if (currentHeadline.length > 15) {
    currentHeadline = currentHeadline.substr(0, 23) + "....";
}

console.log("Nology Post 2021")
console.log(`Headline: ${currentHeadline}`)
console.log(currentArticle);

function getPost() {

}