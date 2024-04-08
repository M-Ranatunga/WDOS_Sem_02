document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.getElementById("newsletterForm");

  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;

   
    saveEmailToLocalStorage(email);

    
    document.getElementById("email").value = "";

    alert("Thank you for subscribing to our newsletter! Stay tuned for the latest updates, exclusive content, and exciting offers delivered straight to your inbox. We appreciate your support!");
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
  
  fetch("wilpattu.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((content) => {
      if (!localStorage.getItem("wil")) { localStorage.setItem("wil", JSON.stringify(content)); }

      const data = JSON.parse(localStorage.getItem("wil"));
      console.log(data);

      document.getElementById("data.main.section1.para.h1").innerHTML =
        data.main.section1.para.h1;
      document.getElementById("data.main.section1.para.p").innerHTML =
        data.main.section1.para.p;
      document.getElementById("data.main.section3.safari.h2").innerHTML =
        data.main.section3.safari.h2;
      document.getElementById("data.main.section3.safari.p").innerHTML =
        data.main.section3.safari.p;
      document.getElementById(
        "data.main.section4.clasmap-containers.ymapheader.h2"
      ).innerHTML = data.main.section4.clasmapcontainers.ymapheader.h2;

      
      function renderIframeFromJSON(data) {
        const iframeURL = data.main.section4.clasmapcontainers.ymap.iframe.src;
        const iframeWidth =
          data.main.section4.clasmapcontainers.ymap.iframe.width;
        const iframeHeight =
          data.main.section4.clasmapcontainers.ymap.iframe.height;

        const iframe = document.createElement("iframe");

        iframe.src = iframeURL;
        iframe.width = iframeWidth;
        iframe.height = iframeHeight;

        document.getElementById("wilMap").appendChild(iframe);
      }
      renderIframeFromJSON(data);

      document.getElementById('10').innerHTML = `<img src="${data.main.section2.gallery_container[0].src}" />`;
      document.getElementById('20').innerHTML = `<img src="${data.main.section2.gallery_container[1].src}" />`;
      document.getElementById('30').innerHTML = `<img src="${data.main.section2.gallery_container[2].src}" />`;

      document.getElementById('40').innerHTML = `<img src="${data.main.section3.yalasafariimg[0].src}" />`;
      document.getElementById('50').innerHTML = `<img src="${data.main.section3.yalasafariimg[1].src}" />`;

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
