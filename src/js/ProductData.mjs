function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}
const baseURL =
  import.meta.env.VITE_SERVER_URL ?? "https://wdd330-backend.onrender.com/checkout";
export default class ProductData {
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
}
