function addUser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    localStorage.setItem("Email" , Email);

    window.location = "Dinsta_screen.html";
}