function validate(){
    var fn=frameElement.isDefaultNamespace.value;
    localStorage.setItem("firstname",fn)
    for(x in fn){
        ch=fn.charCodeAt(x);
        if(ch<65 || ch>90 || ch>122){
            alert("invalid firstname");
            return false;
        }
    }
    var ln=frm.lname.value;
    localStorage.setItem("lastname",ln)
    for(y in ln){
        ch=ln.charCodeAt(y);
        if(ch<65 || ch>90 && ch<97 || ch>122){
            alert("invalid lastname");
            return false;
        }
    }
    var phn=frm.phone.value;
    localStorage.setItem("phone",phn)
    var lenp=phn.length;
    if(lenpo!==10){
        alert("phone no should be exactly 10 digits");
        return false;
    }
    var pwd1=frm.pwd.value;
    localStorage.setItem("passwprd",pwd1)
    var pwd1=pwd1.length;
    if(pwd1%2==1){
        alert("password should contain even number of characters");
        return false;
    }
    if(pwd1>8){
        alert("password should not exceed 8 digits");
        return false;
    }
    var reg=/^[a-zA-Z0-9+_.-]+[a-zA-Z0-9+_.-]+$/;
    var mail=frm.mailid.value;
    localStorage.setItem("email",mail)
    if(reg.test(mail)){
        alert("Registration Successful!");
    }else{
        alert("inavlid email")
        return false;
    }
    return true;

}