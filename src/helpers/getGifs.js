export const getGifs = async (fruta) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(fruta)}&limit=10&api_key=iJuO9LXwFMp9JStjlXeprIIzgonOKVzI`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs
}