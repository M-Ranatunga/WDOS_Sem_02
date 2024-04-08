document.addEventListener("DOMContentLoaded", function () {
  fetch("loging.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((content) => {
      localStorage.setItem("login", JSON.stringify(content));

      const data = JSON.parse(localStorage.getItem("login"));
      console.log(data);

      document
        .getElementById("loginForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          // Get input values
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;

          // Validate credentials
          const user = data.users.find(
            (user) => user.username === username && user.password === password
          );

          if (user) {
            alert("Welcome to our wildlife sanctuary community! " + user.username);
            localStorage.setItem("currentUser", user.username);
            if (user.username == "user") {
              window.location.href = "index.html";
            } else {
              window.location.href = "dash.html";
            }
          } else {
            alert("Invalid username or password. Please try again.");
          }
        });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});

document.getElementById("Skip").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "index.html";
});
