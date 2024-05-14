import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

const getAllProducts = async () => {
  try {
    const resp = await instance.get("/products");
    if (resp.status != 200) {
      throw new Error("Failed to fetch the data");
    }
    return resp.data;
  } catch (e) {
    console.log("error in get all products", e);
    throw new Error("failed to fetch the data");
  }
};

const getProductById = async (id) => {
  try {
    const resp = await instance.get(`/products/${id}`);
    if (resp.status != 200) {
      throw new Error("Failed to fetch the data");
    }
    // console.log(resp.data);
    return resp.data;
  } catch (e) {
    console.log("error in get single products", e);
    throw new Error("failed to fetch the data");
  }
};

const getCartData = async (id) => {
  try {
    const resp = await instance.get(`/carts`);
    if (resp.status != 200) {
      throw new Error("Failed to fetch the data");
    }
    return resp.data;
  } catch (e) {
    console.log("error", e);
    throw new Error("failed to fetch the data");
  }
};

export { getAllProducts, getProductById, getCartData };
