
document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.getElementById("newsletterForm");

  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;

    // Save email to localStorage
    saveEmailToLocalStorage(email);

    // Clear input field
    document.getElementById("email").value = "";

    alert("Thank you for subscribing to our newsletter!");
  });
  function saveEmailToLocalStorage(email) {
    let subscriptions =
      JSON.parse(localStorage.getItem("subscriptions")) || [];
    subscriptions.push(email);
    localStorage.setItem(
      "subscriptions",
      JSON.stringify(subscriptions)
    );
  }
});


document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from JSON file
  fetch("index.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((content) => {
      if (!localStorage.getItem("index")) { localStorage.setItem("index", JSON.stringify(content)); }

      const data = JSON.parse(localStorage.getItem("index"));
      console.log(data);

      document.getElementById("data_main_welcome_left_text_heading").innerHTML =
        data.main.welcome.left_text.heading;
      document.getElementById(
        "data.main.welcome.right_text.heading"
      ).innerHTML = data.main.welcome.right_text.heading;
      document.getElementById(
        "data.main.welcome.right_text.content"
      ).innerHTML = data.main.welcome.right_text.content;
      document.getElementById(
        "data.main.bg2.home_wrapper.text.heading"
      ).innerHTML = data.main.bg2.home_wrapper.text.heading;
      document.getElementById(
        "data.main.bg2.home_wrapper.text.points.1"
      ).innerHTML = data.main.bg2.home_wrapper.text.points[0];
      document.getElementById(
        "data.main.bg2.home_wrapper.text.points.2"
      ).innerHTML = data.main.bg2.home_wrapper.text.points[1];
      document.getElementById(
        "data.main.bg2.home_wrapper.text.points.3"
      ).innerHTML = data.main.bg2.home_wrapper.text.points[2];
      document.getElementById("data.main.explore.heading").innerHTML =
        data.main.explore.heading;
      document.getElementById("data.main.explore.content").innerHTML =
        data.main.explore.content;
      document.getElementById("data.main.bg3.what.heading").innerHTML =
        data.main.bg3.what.heading;

      document.getElementById(
        "homeimg1"
      ).innerHTML = `<img src="${data.main.bg2.home_wrapper.image_src}" />`;
      document.getElementById(
        "homeimg2"
      ).innerHTML = `<img src="${data.main.home_gallery_head.home_gallery_container.items[0].src}" />`;
      document.getElementById(
        "homeimg3"
      ).innerHTML = `<img src="${data.main.home_gallery_head.home_gallery_container.items[1].src}" />`;
      document.getElementById(
        "homeimg4"
      ).innerHTML = `<img src="${data.main.home_gallery_head.home_gallery_container.items[2].src}" />`;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});

if (localStorage.getItem("currentUser")) {
  const getPopup = `<span class="popup" onclick="openPopup()">📝</span>`;
  document
    .getElementById("openPopup")
    .insertAdjacentHTML("beforeend", getPopup);
}

function openPopup() {
  window.open("winpop.html", "", "width=800px, height=410px");
}
