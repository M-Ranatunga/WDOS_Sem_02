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
    
    fetch('animal.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(content => {
          if (!localStorage.getItem("animals")) { localStorage.setItem("animals", JSON.stringify(content)); }
            
            const data = JSON.parse(localStorage.getItem("animals"));
            console.log(data);
  
            document.getElementById('data.main.section1.acardcontainer.acard[0].acardbody.acardtitle').innerHTML = data.main.section1.acardcontainer.acard[0].acardbody.acardtitle;
            document.getElementById('data.main.section1.acardcontainer.acard[0].acardbody.acardintro').innerHTML = data.main.section1.acardcontainer.acard[0].acardbody.acardintro;

            document.getElementById('data.main.section1.acardcontainer.acard[1].acardbody.acardtitle').innerHTML = data.main.section1.acardcontainer.acard[1].acardbody.acardtitle;
            document.getElementById('data.main.section1.acardcontainer.acard[1].acardbody.acardintro').innerHTML = data.main.section1.acardcontainer.acard[1].acardbody.acardintro;

            document.getElementById('data.main.section1.acardcontainer.acard[2].acardbody.acardtitle').innerHTML = data.main.section1.acardcontainer.acard[2].acardbody.acardtitle;
            document.getElementById('data.main.section1.acardcontainer.acard[2].acardbody.acardintro').innerHTML = data.main.section1.acardcontainer.acard[2].acardbody.acardintro;

            document.getElementById('data.main.section2.agallery_head.title').innerHTML = data.main.section2.agallery_head.title;

            document.getElementById('10').innerHTML = `<img src="${data.main.section1.acardcontainer.acard[0].acardimg.src}" />`;
            document.getElementById('20').innerHTML = `<img src="${data.main.section1.acardcontainer.acard[1].acardimg.src}" />`;
            document.getElementById('30').innerHTML = `<img src="${data.main.section1.acardcontainer.acard[2].acardimg.src}" />`;

            document.getElementById('50').innerHTML = `<img src="${data.main.section2.agallery_head.agallery_container.aitem[0].src}" />`;
            document.getElementById('60').innerHTML = `<img src="${data.main.section2.agallery_head.agallery_container.aitem[1].src}" />`;
            document.getElementById('70').innerHTML = `<img src="${data.main.section2.agallery_head.agallery_container.aitem[2].src}" />`;
            document.getElementById('80').innerHTML = `<img src="${data.main.section2.agallery_head.agallery_container.aitem[3].src}" />`;
            document.getElementById('90').innerHTML = `<img src="${data.main.section2.agallery_head.agallery_container.aitem[4].src}" />`;
            document.getElementById('100').innerHTML = `<img src="${data.main.section2.agallery_head.agallery_container.aitem[5].src}" />`;

  
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