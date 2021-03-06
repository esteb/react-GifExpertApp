
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=D7B9Dos2U9j3vMqpZcYHYHnvk81MNCxZ`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs =  data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url  //si viene la images que saque el url
        }
    })

    return gifs;
    
}