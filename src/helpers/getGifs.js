export const getGifs = async (category, limit) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${encodeURI(limit)}&api_key=12MRhCnABCTA78diRoTn7qdJ86sYnxgV`;
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();
  console.log(data);
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
      height: img.images.downsized_medium.height,
      width: img.images.downsized_medium.width,
    };
  });

  console.log(category);

  return gifs;
};
