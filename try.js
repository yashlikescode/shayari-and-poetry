var ur = [];

fetch("./sh.json")
.then( function (response) {return response.json})
.then(function (obj) {
  window.ur[0] = obj;
})

console.log(ur)