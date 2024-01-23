function register (){
  
    const inputEmail = document.getElementById("email") ; 
    const inputPswd = document.getElementById("pswd") ; 
    const inputConfirmPswd = document.getElementById("confirmpswd") ; 

    const divEmailError = document.getElementById("divemail") ;
    const divPswdError = document.getElementById("divpswd") ; 
    const divConfirmPswdError = document.getElementById("divconfirmpswd")

    let email = inputEmail.value ; 
    let pswd = inputPswd.value ; 
    let confirmPswd = inputConfirmPswd.value ; 

    if(email==""){
        divEmailError.innerText= "Email Required For Registration"
    }
    else{
        localStorage.setItem("Email" , email) ; 
    }


    if(pswd == ""){
        divPswdError.innerText="Password Required"
    }
    else{
        divPswdError.innerText=""
    }

    if(pswd.length >= "6"){
        divPswdError.innerText=""
    }
    else{
        divPswdError.innerText=" Password length shoul be minimum 6"
    }

    if(confirmPswd == ""){
        divConfirmPswdError.innerText="Confirm the Password"
    }
    else{
        divConfirmPswdError.innerText=""
    }

    // if(email != ""){
    //     localStorage.setItem("Email" , email) ; 
    // }
    // else{
    //     divEmailError.innerText= "Email Required For Registration" 
    // }

    if(pswd != ""){
        localStorage.setItem("Password" , pswd) ;
    }
    else{
        divPswdError.innerText="Password Required"
    }


    if(  pswd.length >= "6" && pswd == confirmPswd && pswd != "" && email != "" ){
        
        
        location.href ="login.html"
    }
    else{
        alert(suiii)
    } 

}

function Login (){
    const inputEmail = document.getElementById("email") ; 
    const inputPswd = document.getElementById("pswd") ; 
    const inputDiv = document.getElementById("divlogin") ;

    let email = inputEmail.value ; 
    let pswd = inputPswd.value ; 
   
    

    if(localStorage.getItem("Email") == email &&
       localStorage.getItem("Password") == pswd)
    {
        localStorage.setItem("LoggedIn" , "true");
        location.href="home.html"

    }
    else{
        inputDiv.innerText="Login Failed"

    }
}

function Logout (){

    localStorage.removeItem("LoggedIn") ; 
    location.href = "login.html" ; 
}