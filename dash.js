let currentUser = localStorage.getItem("currentUser");

if (currentUser == null) {
  document.getElementById("dash").style.display = "none";
} else {
  document.getElementById("dash").style.display = "block";

  if (currentUser == "user") {
    document.getElementById("abc").style.display = "none";
  } else {
    function table_generator(json_path) {
      let code = ``;
      for (let i = 0; i < json_path.length; i++) {
        code += `<li>${json_path[i]}</li>`;
      }
      return code;
    }
   
    const subscriptions = JSON.parse(localStorage.getItem("subscriptions"));

  
    if (subscriptions && Array.isArray(subscriptions)) {
      document.getElementById("emialLists").innerHTML =
        table_generator(subscriptions);
    } else {
      
      console.error("Subscriptions data is missing or invalid.");
    }
  }
}


const editBtns = document.querySelectorAll(".editBtn");
editBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const pageName = btn.getAttribute("data-page");
    editPage(pageName);
    if (user) {
      alert("Login successful! Welcome, " + user.username);
      
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
});


// Logout
function deleteUser() {
  localStorage.removeItem("currentUser");
}


  document.querySelector(".headingPopup").classList.remove("display-none")
  const getPopup = `<span class="popup" onclick="openPopup()">▶</span>`;
  document.getElementById("openPopup").insertAdjacentHTML("beforeend", getPopup);


function openPopup() {
  window.open("winpop.html", "", "width = 800px, height = 410px");
}

function handleViewClick(url) {
  window.location.href = url;
}
