export const getGifs = async (category) => {

    const myKey = 'exey9XF1F6O1JTTJxV7uF3jL2bo731xo';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${category}&limit=10`;
    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
};
