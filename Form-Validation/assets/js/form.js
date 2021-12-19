let formName = document.querySelector("#name");
let formSubject = document.querySelector("#subject");
let formPhone = document.querySelector("#phone");
let formEmail = document.querySelector("#email");
let formMessage = document.querySelector("#message");
let formError = document.querySelector(".error");
let formSubmit = document.querySelector('#my-form-status');
let form = document.getElementById("my-form");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  Conditions();
});
  
  function Conditions() {
    let x = 0;
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let y = 0;
    
    if(formName.value.length < 5){
        formError.innerHTML = "Please Enter valid Name";
        formError.style.visibility = "visible";
        a=1;
    }     
    
    if(formSubject.value.length == 0){
        formError.innerHTML = "Please Enter Corect Subject";
        formError.style.visibility = "visible";
        b=1;
    } 
    if(formPhone.value.length < 9 && +formPhone.value != NaN){
        formError.innerHTML = "Please Enter valid Phone Number";
        formError.style.visibility = "visible";
        c=1;
    }      
    for(let i = 0; i < formEmail.value.length; i++){
        if(formEmail.value[i] == '@'){
            y=i;
            x = 1;
        }  
    }
   
    if(formMessage.value.length < 10){
        formError.innerHTML = "Please Enter More Than 10 Characters";
        formError.style.visibility = "visible";
        d=1;
    }

    if(x == 1 && formEmail.value[y+1] != 'y' && formEmail.value[y+1] != 'g'){
        formError.innerHTML = "Please Enter valid Email";
        formError.style.visibility = "visible";
    }
    if(x == 0){
        formError.innerHTML = "Please Enter valid Email";
        formError.style.visibility = "visible";
    }
    if(c == 1){
        formError.innerHTML = "Please Enter valid Phone Number";
        formError.style.visibility = "visible";
    }
    if(b == 1){
        formError.innerHTML = "Please Enter Corect Subject";
        formError.style.visibility = "visible";
    }
    if(a == 1){
        formError.innerHTML = "Please Enter valid Name";
        formError.style.visibility = "visible";
    }    
    
    if(formName.value == 0 && formSubject.value == 0 && formPhone.value == 0 && formEmail.value == 0 && formMessage.value == 0){
        formError.innerHTML = "Please complete all forms"; 
        formError.style.visibility = "visible";
     }
     setTimeout(function() {
        formError.innerHTML = "";
        formError.style.visibility = "hidden";
        formSubmit.style.visibility = "hidden";
    }, 1800);
    
     if(a == 0 &&  x == 1 && b ==0 && c == 0 && d == 0){
         
         formSubmit.style.visibility = "visible";
          formName.value = "";
          formEmail.value = "";
          formSubject.value = "";
          formPhone.value = "";
          formMessage.value = "";

     }
  }
  
 
 
  
  
