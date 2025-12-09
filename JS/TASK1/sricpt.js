const nametf=document.getElementById("name");
const email=document.getElementById("email");
const pass=document.getElementById("pass");
const conpass=document.getElementById("conpass");
const phone=document.getElementById("phone");

const nameErr=document.getElementById("nameErr");
const emailErr=document.getElementById("emailErr");
const passErr=document.getElementById("passErr");
const conpassErr=document.getElementById("conpassErr");
const phoneErr=document.getElementById("numberErr");

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const phoneRegex=/^(?:\+?88|0088)?(01[3-9]\d{8})$/;
function formvalidate()
{
    const nameRegex=/^[a-zA-Z]+$/;
    const emailRegex=/\S+@\S+\.\S+/;
    let hasErr=false;
    if(nametf.value.trim()==="")
    {
        hasErr=true;
        nameErr.innerHTML="name can not be empty";
       
    }
    else
    {
        if(!nameRegex.test(nametf.value))
        {
            hasErr=true;
            nameErr.innerHTML="name can not have any symbol or numbers";
            
        }
    }
    if(email.value.trim()==="")
        {
            hasErr=true;
            emailErr.innerHTML="email can not be empty";
            
        }
    else{
        if(!emailRegex.test(email.value))
        {
            hasErr=true;
            emailErr.innerHTML="enter a valid email";
            
        }

    }
    if(!passwordRegex.test(pass.value))
    {
        hasErr=true;
        passErr.innerHTML="enter a strong password";
       
    }
    if(conpass.value!=pass.value)
    {
        hasErr=true;
        conpassErr.innerHTML="password does not match";
       
    }
    if(!phoneRegex.test(phone.value))
    {
        hasErr=true;
        phoneErr.innerHTML="enter a valid phone number";
        phoneErr.style.color="red";
    }
    return !hasErr
}