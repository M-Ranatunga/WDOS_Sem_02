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
  fetch("intro.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((content) => {
      if (!localStorage.getItem("intro")) { localStorage.setItem("intro", JSON.stringify(content)); }

      const data = JSON.parse(localStorage.getItem("intro"));
      console.log(data);

      //sec1
      document.getElementById(
        "data.section1.intro_wrapper.intro_wrapper_text.heading"
      ).innerHTML = data.section1.intro_wrapper.intro_wrapper_text.heading;
      document.getElementById(
        "data.section1.intro_wrapper.intro_wrapper_text.content"
      ).innerHTML = data.section1.intro_wrapper.intro_wrapper_text.content;

      //sec2
      document.getElementById("sintitle").innerHTML =
        data.section2.cardcontainer.cards[0].title;
      document.getElementById("sinintro").innerHTML =
        data.section2.cardcontainer.cards[0].intro;

      document.getElementById("bundalatitle").innerHTML =
        data.section2.cardcontainer.cards[1].title;
      document.getElementById("bundalaintro").innerHTML =
        data.section2.cardcontainer.cards[1].intro;

      document.getElementById("hortontitle").innerHTML =
        data.section2.cardcontainer.cards[2].title;
      document.getElementById("hortonintro").innerHTML =
        data.section2.cardcontainer.cards[2].intro;

      //sec3
      document.getElementById("sinmtitle").innerHTML =
        data.section3.mcardcontainer.cards[0].title;
      // Map Fetching
      function renderIframeFromJSON(data) {
        const iframeURL = data.section3.mcardcontainer.cards[0].map_url;

        const iframe = document.createElement("iframe");

        iframe.src = iframeURL;
        iframe.style.padding = "0";

        document.getElementById("sinLoc").appendChild(iframe);
      }
      renderIframeFromJSON(data);

      document.getElementById("bundalamtitle").innerHTML =
        data.section3.mcardcontainer.cards[1].title;
      // Map Fetching
      function renderIframeFromJSONone(data) {
        const iframeURL = data.section3.mcardcontainer.cards[1].map_url;

        const iframe = document.createElement("iframe");

        iframe.src = iframeURL;
        iframe.style.padding = "0";

        document.getElementById("bundalaLoc").appendChild(iframe);
      }
      renderIframeFromJSONone(data);

      document.getElementById("hortonmtitle").innerHTML =
        data.section3.mcardcontainer.cards[2].title;
      // Map Fetching
      function renderIframeFromJSONtwo(data) {
        const iframeURL = data.section3.mcardcontainer.cards[2].map_url;

        const iframe = document.createElement("iframe");

        iframe.src = iframeURL;
        iframe.style.padding = "0";

        document.getElementById("hortonLoc").appendChild(iframe);
      }
      renderIframeFromJSONtwo(data);

      document.getElementById(
        "introimg1"
      ).innerHTML = `<img src="${data.section1.intro_wrapper.image_src}" />`;

      // document.getElementById('boka').innerHTML = `<img src="${data.section2.cardcontainer.cards[0].image_src}" />`;
      // document.getElementById('boka1').innerHTML = `<img src="${data.section2.cardcontainer.cards[1].image_src}" />`;
      // document.getElementById('boka2').innerHTML = `<img src="${data.section2.cardcontainer.cards[2].image_src}" />`;

      const introphoto = data.section2.cardcontainer.cards[0].image_src;
      document.getElementById("introimg2").src = `./${introphoto}`;

      const introphoto1 = data.section2.cardcontainer.cards[1].image_src;
      document.getElementById("introimg3").src = `./${introphoto1}`;

      const introphoto2 = data.section2.cardcontainer.cards[2].image_src;
      document.getElementById("introimg4").src = `./${introphoto2}`;

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