const get_data_button = document.getElementById("selectPage");
if (get_data_button) {
  get_data_button.addEventListener("click", function (e) {
    const selectPage = document.querySelector(".selectPage").value;
    let textarea = document.querySelector(".jsonTextarea");
    
    if (selectPage == "index") {
      textarea.value = localStorage.getItem("index");
    } else if (selectPage == "intro") {
      textarea.value = localStorage.getItem("intro");
    } else if (selectPage == "wdl") {
      textarea.value = localStorage.getItem("wdl");
    } else if (selectPage == "leo") {
      textarea.value = localStorage.getItem("leo");
    } else if (selectPage == "animals") {
      textarea.value = localStorage.getItem("animals");
    } else if (selectPage == "wil") {
      textarea.value = localStorage.getItem("wil");
    } else if (selectPage == "yala") {
      textarea.value = localStorage.getItem("yala");
    } 
  });
}

const editPageButton = document.getElementById("saveChanges");
if (editPageButton) {
  editPageButton.addEventListener("click", function (e) {
    const selectPage = document.querySelector(".selectPage").value;
    const textareaValue = document.querySelector(".jsonTextarea").value;

    if (selectPage && textareaValue) {
      if (selectPage == "index") {
        localStorage.setItem("index", textareaValue);
      } else if (selectPage == "intro") {
        localStorage.setItem("intro", textareaValue);
      } else if (selectPage == "wdl") {
        localStorage.setItem("wdl", textareaValue);
      } else if (selectPage == "leo") {
        localStorage.setItem("leo", textareaValue);
      } else if (selectPage == "animals") {
        localStorage.setItem("animals", textareaValue);
      } else if (selectPage == "wil") {
        localStorage.setItem("wil", textareaValue);
      } else if (selectPage == "yala") {
        localStorage.setItem("yala", textareaValue);
      } else {
        console.log("hello world");
      }
    }
  });
}
