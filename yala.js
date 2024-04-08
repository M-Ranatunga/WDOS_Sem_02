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
  fetch("yala.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((content) => {
      if (!localStorage.getItem("yala")) { localStorage.setItem("yala", JSON.stringify(content)); }

      const data = JSON.parse(localStorage.getItem("yala"));
      console.log(data);

      document.getElementById("data.main.section2.para.h2").innerHTML =
        data.main.section2.para.h2;
      document.getElementById("data.main.section2.para.p").innerHTML =
        data.main.section2.para.p;

      document.getElementById("data.main.section4.safari.h2").innerHTML =
        data.main.section4.safari.h2;
      document.getElementById("data.main.section4.safari.p").innerHTML =
        data.main.section4.safari.p;

      // Map Fetching
      function renderIframeFromJSON(data) {
        const iframeURL = data.main.section5.mapcontainer.ymap.iframe.src;
        const iframeWidth = data.main.section5.mapcontainer.ymap.iframe.width;
        const iframeHeight = data.main.section5.mapcontainer.ymap.iframe.height;

        const iframe = document.createElement("iframe");

        iframe.src = iframeURL;
        iframe.width = iframeWidth;
        iframe.height = iframeHeight;

        document.getElementById("yalaLoc").appendChild(iframe);
      }
      renderIframeFromJSON(data);

         
        document.getElementById('10').innerHTML = `<img src="${data.main.section3.gallery_head.gallery_container.item[0].img.src}" />`;
        document.getElementById('20').innerHTML = `<img src="${data.main.section3.gallery_head.gallery_container.item[1].img.src}" />`;
        document.getElementById('30').innerHTML = `<img src="${data.main.section3.gallery_head.gallery_container.item[2].img.src}" />`;

        document.getElementById('40').innerHTML = `<img src="${data.main.section4.yalasafariimg.img[0].src}" />`;
        document.getElementById('50').innerHTML = `<img src="${data.main.section4.yalasafariimg.img[1].src}" />`;


    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});

if (localStorage.getItem("currentUser")) {
  const getPopup = `<span class="popup" onclick="openPopup()">📝</span>`;
  document.getElementById("openPopup").insertAdjacentHTML("beforeend", getPopup);
}

function openPopup() {
  window.open("winpop.html", "", "width=800px, height=410px");
}