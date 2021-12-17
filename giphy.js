

const apiKey = "kIe2HWLwcnMkJqXU5Er7HqZfdcBeysYe";
const urls = { bananaUrl: `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10&q=banana`,
    boringUrl: `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`};
let currentUrl = urls.bananaUrl;
async function getGifs(url) {
    const topTenGifs = await fetch(url)
        .then((response) => response.json());
    const gifDiv = document.getElementById("gifs");
    topTenGifs.data.forEach((gif) => {
        const image = document.createElement('img')
        image.src = gif.images.original.url;
        image.className = "gif";
        gifDiv.appendChild( image );
    })
}

function removeGifs() {
    const gifDiv = document.getElementById("gifs");
    while(gifDiv.firstChild) {
        gifDiv.removeChild(gifDiv.firstChild);
    }
}

function setUrl() {
    if(currentUrl === urls.bananaUrl) {
        currentUrl = urls.boringUrl;
        document.getElementById("bananaHaterButton").innerHTML = "Gimme bananas!";
    } else {
        currentUrl = urls.bananaUrl
        document.getElementById("bananaHaterButton").innerHTML = "I hate bananas";
    }
}

getGifs(currentUrl);

document.getElementById("bananaHaterButton").addEventListener("click", () => {
    setUrl();
    removeGifs();
    getGifs(currentUrl);
})
