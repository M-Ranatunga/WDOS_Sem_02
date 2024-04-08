document.addEventListener("DOMContentLoaded", function () {
    const newsletterForm = document.getElementById("newsletterForm");
  
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      const email = document.getElementById("email").value;
  
      
      saveEmailToLocalStorage(email);
  
      
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
  
  fetch('leopards.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(content => {
        if (!localStorage.getItem("leo")) { localStorage.setItem("leo", JSON.stringify(content)); }
          
          const data = JSON.parse(localStorage.getItem("leo"));
          console.log(data);

          document.getElementById('data.main.r1sections[0].r1text.title').innerHTML = data.main.r1sections[0].r1text.title;
          document.getElementById('data.main.r1sections[0].r1text.description').innerHTML = data.main.r1sections[0].r1text.description;

          document.getElementById('data.main.r1sections[1].r1text.title').innerHTML = data.main.r1sections[1].r1text.title;
          document.getElementById('data.main.r1sections[1].r1text.description').innerHTML = data.main.r1sections[1].r1text.description;

          document.getElementById('data.main.r1sections[2].r1text.title').innerHTML = data.main.r1sections[2].r1text.title;
          document.getElementById('data.main.r1sections[2].r1text.description').innerHTML = data.main.r1sections[2].r1text.description;

          document.getElementById('data.main.sections[0].title').innerHTML = data.main.sections[0].title;
          document.getElementById('data.main.sections[0].description').innerHTML = data.main.sections[0].description;

          document.getElementById('data.main.sections[1].title').innerHTML = data.main.sections[1].title;
          document.getElementById('data.main.sections[1].description').innerHTML = data.main.sections[1].description;
          
          const leophoto = data.main.r1sections[0].image;
          document.getElementById("10").src = `./${leophoto}`;

          const leophoto1 = data.main.r1sections[1].image;
          document.getElementById("20").src = `./${leophoto1}`;

          const leophoto2 = data.main.r1sections[2].image;
          document.getElementById("30").src = `./${leophoto2}`;


          const leophoto3 = data.main.sections[0].image;
          document.getElementById("40").src = `./${leophoto3}`;

          const leophoto4 = data.main.sections[1].image;
          document.getElementById("50").src = `./${leophoto4}`;

      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
 });

 if (localStorage.getItem("currentUser")) {
    const getPopup = `<span class="popup" onclick="openPopup()">📝</span>`;
    document.getElementById("openPopup").insertAdjacentHTML("beforeend", getPopup);
}

function openPopup() {
    window.open("winpop.html", "", "width=800px, height=410px");
}
  