function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
       // alert("Valid email address!");
        //document.myForm.email.focus();
        document.getElementById("checkImg").src = "icons8-tick-48.png";

        return true;
    }
    else {
        //alert("You have entered an invalid email address!");
        //document.myForm.email.focus();
        document.getElementById("checkImg").src = "icons8-cancel-48.png";
        return false;
    }
}
function resetForm(){
    document.getElementById("myForm").reset();
}
function closeNav(){
    document.getElementById("sidebar2").style.display="none";
  
    console.log("close");

}
function openNav(){
    document.getElementById("sidebar2").style.display="block";
    console.log("open");
}
function validateForm() {
    //let x = document.forms["myForm"]["fistName","lastName","email","contact","address"].value;
    //if (x == "") {
     // alert("Name must be filled out");
    //document.getElementById["firstName","lastName","email","contact","address"].style.borderColor='red';
      const inputs=[firstName,lastName,email,contact,address];
      inputs.forEach((element) => {
        element.style.borderColor='red';
      });
      console.log("save");
      return false;
    }
  //}