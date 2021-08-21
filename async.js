const fetch = require("node-fetch");


async function fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
}

for (let index = 0; index < 1000; index++) {
    console.log(index);
}

fetchProducts().then((data) => {
  console.log("async:", data);
});
//console.log(fetchProducts());

console.log("I am done...");
