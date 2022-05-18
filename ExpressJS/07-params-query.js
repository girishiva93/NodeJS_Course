// Task - json data lai import garne ani website ma display garne
const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1> <a href='/api/product'>Product</a>");
});

app.get("/api/product", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/product/:productId", (req, res) => {
  console.log(req.params);
  const { productId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );
  if (!singleProduct) {
    return res.status(404).send("<h1>Product id not found </h1>");
  }
  return res.json(singleProduct);
});

app.get("/api/product/:productId/review/:reviewId", (req, res) => {
  console.log(req.params);
  res.send("<h1>Hello World</h1>");
});
app.get("/api/v1/query", (req, res) => {
  let sortedProducts = [...products];
  const { search, limit } = req.query;
  if (search) {
    sortedProducts = sortedProducts.filter((products) => {
      return products.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  // console.log(sortedProducts.length);
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => console.log("server is running on 5000 port"));
