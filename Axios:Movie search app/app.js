const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    getApi();
})  

const container = document.getElementById('container');
    
   // const searchTerm = form.elements.query.value;
   // const config = { params: { q: searchTerm}}
   // const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
   // makeImages(res.data);
    //form.elements.query.value = "";

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            var img = new Image();
            img.src = result.show.image.medium;
            document.getElementById('container').appendChild(img);
        }
    }
}
const getApi = async ()=>{
    const searchTerm = form.elements.query.value;
    const config = {params: {q: searchTerm}};
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config)
    container.innerHTML = '';
    makeImages(res.data);
    form.elements.query.value = '';
}