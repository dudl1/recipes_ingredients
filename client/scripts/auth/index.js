const block_auth_change = document.querySelector(".block_auth_change > span");

const block_authorization = document.querySelector(".block_authorization");
const block_registration = document.querySelector(".block_registration");


function handleImageChange(fileInput) {
    const pickerImage = document.querySelector(".registration_author_image > label");
    var file = fileInput.files[0];
    console.log(file)
  
    if (file) {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        pickerImage.style.backgroundImage = `url(${e.target.result})`;
        pickerImage.style.backgroundSize = "cover";
      };
  
      reader.readAsDataURL(file);
    }
}


block_auth_change.onclick = ()=> {
    if (block_auth_change.classList.toggle("active")) {
        block_authorization.classList.add("active");

        block_registration.classList.remove("active");
    } else {
        block_authorization.classList.remove("active");

        block_registration.classList.add("active");
    }
}