export const getCatRequest = async () => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search", {
      headers: {
        "x-api-key": import.meta.env.REACT_APP_CAT_API_KEY,
      },
    });
    const data = await response.json();
    if (data && data[0] && data[0].url) {
      console.log("returned ", data[0].url);
      return data[0].url;
    }
  } catch (error) {
    console.error("Failed to fetch cat:", error);
  }
};
