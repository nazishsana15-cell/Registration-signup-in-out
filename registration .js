function signup(){
   var email = document.getElementById(`semail`).value
   var pass = document.getElementById(`spass`).value
   localStorage.setItem(`Email`, email)
   localStorage.setItem(`Pass`, pass)
   location.href = `./Signin.html`
}
function signin(){
     var email = document.getElementById(`lemail`).value
     var pass = document.getElementById(`lpass`).value

     if(localStorage.getItem(`Email`) == email && localStorage.getItem(`Pass`) == pass){
        location.href = `./Welcome.html`
    }
    else{
        location.href = `./Signup.html`
    }
}
function logout(){
    location.href = `./signin.html`
}