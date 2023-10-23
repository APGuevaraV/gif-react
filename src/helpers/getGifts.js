
export const getGifts = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=79CPmN64WltEbmaVmO8pod0sZbeNdHiA&q=${category}&limit=10&offset=1`

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifts = data.map( gif => ({
            id: gif.id,
            title : gif.title,
            url : gif.images.downsized_medium.url
        
        }));
    // console.log(gifts)
   return gifts
}