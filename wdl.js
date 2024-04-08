document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.getElementById("newsletterForm");

  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;

   
    saveEmailToLocalStorage(email);

    
    document.getElementById("email").value = "";

    alert("Thank you for subscribing to our newsletter! Stay tuned for the latest updates, exclusive content, and exciting offers delivered straight to your inbox. We appreciate your support!" );
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
  
  fetch("wdl.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((content) => {
      if (!localStorage.getItem("wdl")) { localStorage.setItem("wdl", JSON.stringify(content)); }

      const data = JSON.parse(localStorage.getItem("wdl"));
      console.log(data);

      document.getElementById(
        "data.main.WDL_Container.WDL_Container_Text.content"
      ).innerHTML = data.main.WDL_Container.WDL_Container_Text.content;
      document.getElementById(
        "data.main.section2.gallery_head.title"
      ).innerHTML = data.main.section2.gallery_head.title;

      
      function renderIframeFromJSONtwo(data) {
        const iframeURL = data.main.section1.map.iframe.src;
        const iframeWidth = data.main.section1.map.iframe.width;
        const iframeHeight = data.main.section1.map.iframe.height;

        const iframe = document.createElement("iframe");

        iframe.src = iframeURL;
        iframe.width = iframeWidth;
        iframe.height = iframeHeight;
        iframe.style.padding = "0";

        document.getElementById("wdlMap").appendChild(iframe);
      }
      renderIframeFromJSONtwo(data);

      document.getElementById(
        "data.main.section2.gallery_head.gallery_container.Witem[0].h4"
      ).innerHTML =
        data.main.section2.gallery_head.gallery_container.Witem[0].h4;
      document.getElementById(
        "data.main.section2.gallery_head.gallery_container.Witem[1].h4"
      ).innerHTML =
        data.main.section2.gallery_head.gallery_container.Witem[1].h4;
      document.getElementById(
        "data.main.section2.gallery_head.gallery_container.Witem[2].h4"
      ).innerHTML =
        data.main.section2.gallery_head.gallery_container.Witem[2].h4;
      document.getElementById(
        "data.main.section2.gallery_head.gallery_container.Witem[3].h4"
      ).innerHTML =
        data.main.section2.gallery_head.gallery_container.Witem[3].h4;
      document.getElementById(
        "data.main.section2.gallery_head.gallery_container.Witem[4].h4"
      ).innerHTML =
        data.main.section2.gallery_head.gallery_container.Witem[4].h4;

        // document.getElementById(
        //   "wdlimg1"
        // ).innerHTML = `<img src="${data.main.section2.gallery_container.Witem[0].img.src}" />`;

        const wdlphoto = data.main.section2.gallery_head.gallery_container.Witem[0].img.src;
        document.getElementById("10").src = `./${wdlphoto}`;

        const wdlphoto1 = data.main.section2.gallery_head.gallery_container.Witem[1].img.src;
        document.getElementById("20").src = `./${wdlphoto1}`;

        const wdlphoto2 = data.main.section2.gallery_head.gallery_container.Witem[2].img.src;
        document.getElementById("30").src = `./${wdlphoto2}`;

        const wdlphoto3 = data.main.section2.gallery_head.gallery_container.Witem[3].img.src;
        document.getElementById("40").src = `./${wdlphoto3}`;

        const wdlphoto4 = data.main.section2.gallery_head.gallery_container.Witem[4].img.src;
        document.getElementById("50").src = `./${wdlphoto4}`;


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