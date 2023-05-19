function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        // alert("Valid email address!");
        //document.myForm.email.focus();
        document.getElementById("checkImg").src = "../images/icons8-tick-48.png";

        return true;
    } else {
         alert("Invalid email");
        //document.myForm.email.focus();
        document.getElementById("checkImg").src = "../images/icons8-cancel-48.png";
        return false;
    }
}

function resetForm() {
    document.getElementById("myForm").reset();
}

function closeSider() {
    document.getElementById("sidebar2").style.display = "none";

    console.log("close");

}

function openSider() {
    document.getElementById("sidebar2").style.display = "block";
    console.log("open");
}
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let address = document.getElementById("address");
let contact = document.getElementById("contact");
let city = document.getElementById("city");
const inputs = [firstName, lastName, email, contact, address, city];

const validateForm = () => {



    let invalidInput = false;
    inputs.forEach((input) => {
        if (input.value == null || input.value.trim() === "") {
            input.style.borderColor = "red";
            invalidInput = true;
        } else {

            input.style.borderColor = "";

        }

    });
    if (invalidInput) {
        alert("Please enter all fieds blank!");

    }

    console.log("save");
    return;
}
const menuTitles = document.querySelectorAll('.icon-bold');
menuTitles.forEach(menuTitle => {
    menuTitle.addEventListener('click', function() {
    menuTitles.forEach(title => title.classList.remove('clicked'));
    this.classList.add('clicked');
  });
});
/////////////
const username=localStorage.getItem("firstName");
const show=document.getElementById("username");
show.innerHTML=username;


function logout(){
    localStorage.clear();
    location.reload();
    window.location.href = "./login.html";
    console.log("logout");

}




