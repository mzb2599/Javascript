let website = {};
console.log(website.toString());

let user = new Object();
console.log("user:", user);

let web = {
    url: "https://www.flipkart.com/",
    active: true,
    getData: function () {
        console.log("Getting data ...");
      }
};

console.log(web.url);
web.getData();