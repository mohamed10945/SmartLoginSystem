var LoginForm = document.getElementById("Login");
var SignForm = document.getElementById("SignUp");
var regForm = document.getElementById("register");
var logIn = document.querySelectorAll("#Login input");
var SignUp = document.querySelectorAll("#SignUp input");
var ancor = document.querySelectorAll("a");
var btnLogIn = document.getElementById("btnLogIn");
var btnSignUp = document.getElementById("btnSignUp");
var btnregister = document.getElementById("btnregister");
var indexOfuserData = null;
var userData = [];

if(JSON.parse(localStorage.getItem("UserDataList")) != null){

    userData = JSON.parse(localStorage.getItem("UserDataList"));
}


ancor[0].addEventListener("click" , function(){
          
    LoginForm.style.display="none";
    SignForm.style.display = "block";
        })

ancor[1].addEventListener("click" , function(){
          
    LoginForm.style.display="block";
    SignForm.style.display = "none";
        })
btnregister.addEventListener("click" , function(){
    SignForm.style.display = "none";
    regForm.style.display ="none";
    LoginForm.style.display="block";
})

btnLogIn.addEventListener("click" , function(){
   

        if(isMailFound(logIn[0].value)){
            if(isPassCreact(logIn[1].value , indexOfuserData)){
                create();
            }else{
                alert("wrong passoerd");
            }
        }else{
            alert("your mail not found plz sign up");
        }
    

    clearform(logIn);
  
})

btnSignUp.addEventListener("click" , function(){


    if(isInputsValid(SignUp[1].value , SignUp[2].value ,SignUp[0].value)){
        if(isMailFound(SignUp[1].value)){
            alert("Mail Dublcatied");
        }else{
            addData();
            SayWelcome();
        }        
    }else{
        alert("inputs not valid ");

    }
    clearform(SignUp);
})


function isInputsValid(email , pass , name=null){
    var checkName = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    var checkMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var checkpass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if(name == null){
        return (checkMail.test(email) && checkpass.test(pass)) ;   
    }else{
        return (checkMail.test(email) && checkpass.test(pass) && checkName.test(name)) ;
    }

}

function addData(){
    var DataItem =
    {
        userName:SignUp[0].value,
        userMail:SignUp[1].value,
        userPass:SignUp[2].value
 
    }
    userData.push(DataItem);
    localStorage.setItem("UserDataList" , JSON.stringify(userData));
}


function SayWelcome(){
    SignForm.style.display = "none";
    LoginForm.style.display="none";
    regForm.style.display ="block";
}

function clearform(formtype){
    for(var i= 0 ; i < formtype.length ; i++){
        formtype[i].value = "";
    }
 }

function isMailFound(mail){
    if(JSON.parse(localStorage.getItem("UserDataList")) != null){
        console.log(mail);

        for(i=0 ; i < userData.length; i++){

            if(userData[i].userMail.toLowerCase()== mail.toLowerCase() ){
                console.log("true");
                indexOfuserData = i;
                return true;
            }
            
        }
   }else{
       return false;
   }
}

function isPassCreact(password,index){

    return (userData[index].userPass == password);
    
}
function create(){
    window.location = 'html/home.html';
}




    


