let url="https://api.unsplash.com/photos/random?count=8&client_id=tiPGSSsgw9JBOq3x-dxdjpUKpApceJ7xqjHcua9bGGY&query="

let btn=document.querySelector("button");
btn.addEventListener("click",async()=>
{
    let prompt=document.querySelector("input").value;
    getImages(prompt);
});


async function getImages(prompt)
{
    try
    {
        let res=await axios.get(url+prompt);
        document.querySelectorAll('.image-gallery img').forEach((img, i) => {
            img.src = res.data[i]?.urls.regular || '';
            img.alt = res.data[i]?.alt_description || 'Image';
    });
}
    catch
    {
        console.log("error");
    }
}