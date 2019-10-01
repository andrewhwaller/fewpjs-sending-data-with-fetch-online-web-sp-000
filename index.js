// Add your code here

let formData = {
  name: "Steve",
  email: "some email"
};

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};


function submitData(name, email) {
  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  .catch(function(error) {
    let errorHeading = document.querySelector('h1')
    error.appendChild(errorHeading)
  })
}
