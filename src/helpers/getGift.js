export  const getGift = async(category)=>{ 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ir5rz0vc6y0j6G9V9EQ4SmKZgN7F5g7F&limit=10&q=${ encodeURI(category) }`;
    const response = await fetch(url);
    const { data } = await response.json();
    
    const gifts = data.map((data)=>{
        return {
            id : data.id,
            title: data.title,
            url: data.images.downsized_medium.url
        }
    });
    return gifts;
}