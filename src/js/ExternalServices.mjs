async function convertToJson(res) {
  const response = await res.json();
  if (res.ok) {
    return response;
  } else {
    throw { name: "ExternalServiceError", message: response };
  }
}
const baseURL =
  import.meta.env.VITE_SERVER_URL ?? "https://wdd330-backend.onrender.com/";

  export default class ExternalServices {
    async getData(category) {
      const response = await fetch(baseURL + `products/search/${category}`);
      const data = await convertToJson(response);
      return data.Result;
    }
    async findProductById(id) {
      const products = await fetch(`${baseURL}product/${id}`);
      const data = await convertToJson(products);
      return data.Result;
    }
    async checkout(payload) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      };
      return await fetch(baseURL + "checkout/", options).then(convertToJson);
    }
  }
