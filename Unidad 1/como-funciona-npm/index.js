const fetch = require("node-fetch")


var response = fetch("https://api.github.com/users/oscar")
    .then(response => response.json())
    .then(response => console.log(response))