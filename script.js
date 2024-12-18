let url = "https://api.unsplash.com/photos/random?count=8&client_id=tiPGSSsgw9JBOq3x-dxdjpUKpApceJ7xqjHcua9bGGY&query=";

let btn = document.querySelector("button");
let input = document.querySelector("input");

async function getImages(prompt) {
    try {
        let res = await axios.get(url + prompt);
        document.querySelectorAll('.image-gallery img').forEach((img, i) => {
            img.src = res.data[i]?.urls.regular || '';
            img.alt = res.data[i]?.alt_description || 'Image';
        });
    } catch {
        console.log("error");
    }
}


btn.addEventListener("click", () => {
    let prompt = input.value;
    getImages(prompt);
});

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        let prompt = input.value;
        getImages(prompt);
    }
});
