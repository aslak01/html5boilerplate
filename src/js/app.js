const testModules = require("./test-module");
require("../css/app.css");
require("../scss/style.scss");

let posts;
let loaded = false;

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then(function (data) {
    console.log(data);
    let posts = [];
    for (var i = 0; i < data.length; i++) {
      posts +=
        "<article><h3>" +
        data[i].title +
        "</h3>" +
        "<p>" +
        data[i].body +
        "</p></article>";
    }
    var update = document.getElementById("posts");
    update.innerHTML = posts;
  })
  .catch(function (err) {
    console.warn("Noe gikk skeis.", err);
  });
