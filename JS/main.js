
window.onload = function(){

    // Function Reset

    function reset(input, removeError){
      document.getElementById(removeError).style.display = "none";
      document.getElementById(input).classList.remove("form-input-invalid");
    }

    // Regular expresions - i´m declare regular expresions because i want to asign them into a constants
    const lettersEr = /[a-z]/i; 
    const numbersEr =/\d/g;
    const characterEr = /\W/;
    const numberandletters = /\w/;


    //validate Name

    const name = document.getElementById("name");
      name.addEventListener("focus",function  ( event ) {
        event.target.style.background = "";    
      }, true);
      name.addEventListener("blur", function( event ) {
        validateName(event.target); 
      }, true);
    
    function validateName(){
      const name = document.getElementById("name").value;
      const space = name.indexOf(" ");
      const lettersAmount = name.length;
      const invalidName = "Invalid name";

        if (lettersAmount<7 || space === -1 ) { 
          const nameInvalidInput = document.getElementById("name-wrong");
          nameInvalidInput.innerHTML = invalidName;
          nameInvalidInput.style.display = "block";
          document.getElementById("name").classList.add("form-input-invalid");
          return invalidName;
        } else {
          reset("name", "name-wrong");
          document.getElementById("name").classList.add("form-input-valid");
          console.log(validateName());
          return true;
        }
      }

    //Validate email

    const mail = document.getElementById("mail");
      mail.addEventListener("focus", function( event ) {
        event.target.style.background = "";    
      }, true);
      mail.addEventListener("blur", function( event ) {
        validateMail(event.target); 
      }, true);

    function validateMail(){
      const mail= document.getElementById("mail").value;
      const at = mail.indexOf("@");
      const com = mail.indexOf(".com");
      const invalidMail = "invalid e-mail";

        if (at === -1 || com ===-1) {
        const mailInvalidInput = document.getElementById("mail-wrong");
        mailInvalidInput.innerHTML = invalidMail;
        mailInvalidInput.style.display = "block";
        document.getElementById("mail").classList.add("form-input-invalid");
        return invalidMail;
        } else {
          reset("mail", "mail-wrong");
          document.getElementById("mail").classList.add("form-input-valid");
          console.log(validateName());
          return true;
          }
    }
      
    //Validate Password

    const password = document.getElementById("password");
      password.addEventListener("focus", function( event ) {
        event.target.style.background = "";    
      }, true);
      password.addEventListener("blur", function( event ) {
        validatePassword(event.target); 
      }, true);

    function validatePassword(){
      const password = document.getElementById("password").value;
      const lettersAmount = password.length;
      const gotNumbersandletter = numberandletters.test(password);
      const invalidPassword = "invalid password";

      if (lettersAmount < 8 || !gotNumbersandletter) {
       const passwordInvalidInput = document.getElementById("password-wrong");
       passwordInvalidInput.innerHTML = invalidPassword;
       passwordInvalidInput.style.display = "block";
       document.getElementById("password").classList.add("form-input-invalid");
       return invalidPassword;
      }else{
        reset("password", "password-wrong");
        document.getElementById("password").classList.add("form-input-valid");
        console.log(validatePassword())
        return true;
      }
    }

    //Validate Repeat Password
    
    const repPassword = document.getElementById("repeat-password");
    repPassword.addEventListener("focus", function( event ) {
      event.target.style.background = "";    
    }, true);
    repPassword.addEventListener("blur", function( event ) {
      validatePassword(event.target); 
    }, true);

    function validateRepeatpassword(){
      const repPassword = document.getElementById("repeat-password").value;
      const password = document.getElementById("password").value;
      const invalidPasswordrepeat = "the passwords are not same";

      if (repPassword !== password) {
       const reppasswordInvalidInput = document.getElementById("repeat-wrong");
       reppasswordInvalidInput.innerHTML = invalidPasswordrepeat;
       reppasswordInvalidInput.style.display = "block";
       document.getElementById("repeat-password").classList.add("form-input-invalid");
       return invalidPasswordrepeat;
      }else{
        reset("repeat-password", "repeat-wrong");
        document.getElementById("repeat-password").classList.add("form-input-valid");
        console.log(validateRepeatpassword())
        return true;
      }
    }

    //Validate age

    const age = document.getElementById("age");
      age.addEventListener("focus", function( event ) {
        event.target.style.background = "";    
      }, true);
      age.addEventListener("blur", function( event ) {
        validateAge(event.target); 
      }, true);

    function validateAge() {
      const age = document.getElementById("age").value;
      const invalidAge = "You are too young";
      
      if (age < 18) {
        const ageInvalidInput = document.getElementById("age-wrong");
        ageInvalidInput.innerHTML = invalidAge;
        ageInvalidInput.style.display = "block";
        document.getElementById("age").classList.add("form-input-invalid");
        return invalidAge;
      } else {
        reset("age", "age-wrong");
        document.getElementById("age").classList.add("form-input-valid");
        console.log(validateAge())
          return true;
        }
      }

    //Validate TEL
    const tel = document.getElementById("tel");
    tel.addEventListener("focus", function( event ) {
      event.target.style.background = "";    
    }, true);
    tel.addEventListener("blur", function( event ) {
      validateTel(event.target); 
    }, true); 

    function validateTel() {
      const tel = document.getElementById("tel").value;
      const numberAmount = tel.length;
      const invalidTel = "Invalid Phone";
      const space = tel.indexOf(" ");
      const underscore = tel.indexOf("_");
      const parenthesis =tel.indexOf("()")


      if (numberAmount <7 || space !== -1|| underscore !== -1 || parenthesis !== -1){
        const telInvalidInput = document.getElementById("tel-wrong");
        telInvalidInput.innerHTML = invalidTel;
        telInvalidInput.style.display = "block";
        document.getElementById("tel").classList.add("form-input-invalid");
        return invalidTel;
      } else {
        reset("tel", "tel-wrong");
        document.getElementById("tel").classList.add("form-input-valid");
        console.log(validateTel())
        return true;

      }
    }

    //Validate Adress
    const adress = document.getElementById("adress");
    adress.addEventListener("focus", function( event ) {
      event.target.style.background = "";    
    }, true);
    adress.addEventListener("blur", function( event ) {
      validateAdress(event.target); 
    }, true); 

    function validateAdress(){
      const adress = document.getElementById("adress").value;
      const lettersAmount = adress.length;
      const space = adress.indexOf(" ");
      const invalidAdress = "Invalid Addres";

      if (lettersAmount < 5 || space ===-1) {
        const adressInvalidInput = document.getElementById("adress-wrong");
        adressInvalidInput.innerHTML = invalidAdress;
        adressInvalidInput.style.display = "block";
        document.getElementById("adress").classList.add("form-input-invalid");
        return invalidAdress;
      } else {
        reset("adress", "adress-wrong");
        document.getElementById("adress").classList.add("form-input-valid");
        console.log(validateAdress())
        return true;
      }
    }

    //Validate City

    const city = document.getElementById("city");
    city.addEventListener("focus", function( event ) {
      event.target.style.background = "";    
    }, true);
    city.addEventListener("blur", function( event ) {
      validateCity(event.target); 
    }, true); 

    function validateCity(){
      const city = document.getElementById("city").value;
      const letterAmount = city.length;
      const invalidCity = "Invalid City";

      if (letterAmount <3) {
        const cityInvalidInput = document.getElementById("city-wrong");
        cityInvalidInput.innerHTML = invalidCity;
        cityInvalidInput.style.display = "block";
        document.getElementById("city").classList.add("form-input-invalid");
        return invalidCity;
      } else {
        reset("city", "city-wrong");
        document.getElementById("city").classList.add("form-input-valid");
        console.log(validateCity())
        return true;
      }
    }

    //Validate ZIP-Code
  
    const zcode = document.getElementById("zip-code");
    zcode.addEventListener("focus", function( event ) {
      event.target.style.background = "";    
    }, true);
    zcode.addEventListener("blur", function( event ) {
      validateCode(event.target); 
    }, true); 

    function validateCode(){
      const zcode = document.getElementById("zip-code").value;
      const numberAmount = zcode.length;
      const invalidZcode = "Invalid Zip-code";
      
      if (numberAmount <= 3) {
        zcodeInvalidInput = document.getElementById("zcode-wrong");
        zcodeInvalidInput.innerHTML = invalidZcode;
        zcodeInvalidInput.style.display = "block";
        document.getElementById("zip-code").classList.add("form-input-invalid");
        return invalidZcode;
      } else {
        reset("zip-code", "zcode-wrong");
        document.getElementById("zip-code").classList.add("form-input-valid");
        console.log(validateCode())
        return true
      }
    }
    //Validate DNI
    const dni = document.getElementById("dni");
    dni.addEventListener("focus", function( event ) {
      event.target.style.background = "";    
    }, true);
    dni.addEventListener("blur", function( event ) {
      validateDni(event.target); 
    }, true); 

    function validateDni (){
      const dni = document.getElementById("dni").value;
      const numberAmount = dni.length;
      const invalidDni = "Invalid ID";
      
      if (numberAmount <7) {
        dniInvalidInput = document.getElementById("dni-wrong");
        dniInvalidInput.innerHTML = invalidDni;
        dniInvalidInput.style.display = "block";
        document.getElementById("dni").classList.add("form-input-invalid");
        return invalidDni;
      } else {
        reset("dni", "dni-wrong", "form-imput-invalid");
        document.getElementById("dni").classList.add("form-input-valid");
        console.log(validateDni())
        return true
      }
    }
    
    //Validation form

    
    function validateForm() {
    
      const alertName = validateName();
      const alertEmail = validateMail();
      const alertPassword = validatePassword();
      const alertRepeat = validateRepeatpassword();
      const alertAge = validateAge();
      const alertTel = validatePhone();
      const alertAddress = validateAddress();
      const alertCity = validateCity();
      const alertZcode = validateCode();
      const alertDni = validateDni();

      if ( alertName !==  true || alertEmail !== true ||alertPassword !==  true ||alertRepeat !== true
        || alertAge !== true ||alertTel !==  true || alertAddress !== true ||
        alertCity !==  true || alertZcode !== true || alertDni !==true) {
          alert ("You must make changes")
        return true
      } else {
        alert ("¡You are subscribe now!")
      }
      
      const button= document.getElementsByClassName("button");
      button.addEventListener ("click",  function submite() {
        alert('THANKS FOR SUBSCRIBE!');
    });
     
}
}