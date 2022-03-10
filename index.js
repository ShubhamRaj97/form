let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");


// btnLogin.onclick = function(){
//     signIn.classList.add("Active");
//     signUp.classList.add("inActive");
// }

// btnSignUp.onclick = function(){
//     signIn.classList.remove("Active");
//     signUp.classList.remove("inActive");
// }


btnLogin.addEventListener("click", function(){
    signIn.classList.add("Active")
    signUp.classList.add("inActive")
})

btnSignUp.addEventListener("click",function(){
    signIn.classList.remove("Active")
    signUp.classList.remove("inActive")
})