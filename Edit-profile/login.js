const username = document.getElementById("username");
const password = document.getElementById("password");

function login() {
    fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: username.value,
                password: password.value,

            })
        })
        .then(res => {
            if (res.ok) {
                return res.json();

            } else {
                alert("Invalid username or password");
            }
        })
        .then(data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('firstName', data.firstName);
            localStorage.setItem('image',data.image);
            console.log("login success");
            window.location.href = "./edit-profile.html";
        })
        .catch(error => {
            console.error('login failed', error);
        })


}