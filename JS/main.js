
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

    const nameInput = document.getElementById("name");
      nameInput.addEventListener("focus",function  ( event ) {
        event.target.style.background = "";    
      }, true);
      nameInput.addEventListener("blur", function( event ) {
        validateName(); 
      }, true);
    
    function validateName(){
      const name = document.getElementById("name").value;
      const space = name.indexOf(" ");
      const lettersAmount = name.length;
      const invalidName = "It must have more than 6 letters and at least one space in between.";

        if (lettersAmount<7 || space === -1 ) { 
          const nameInvalidInput = document.getElementById("name-wrong");
          nameInput.style.background = "pink"; 
          nameInvalidInput.innerHTML = invalidName;
          nameInvalidInput.style.display = "block";
          document.getElementById("name").classList.add("form-input-invalid");
          return false;
        } else {
          reset("name", "name-wrong");
          document.getElementById("name").classList.add("form-input-valid");
          console.log(validateName());
          return true;
        }
      }

    //Validate email

    const mailInput = document.getElementById("mail");
      mailInput.addEventListener("focus", function( event ) {
        event.target.style.background = "";    
      }, true);
      mailInput.addEventListener("blur", function( event ) {
        validateMail(); 
      }, true);

    function validateMail(){
      const mail= document.getElementById("mail").value;
      const at = mail.indexOf("@");
      const com = mail.indexOf(".com");
      const invalidMail = "invalid e-mail, the E-mail must contain @ and .com";

        if (at === -1 || com ===-1) {
        const mailInvalidInput = document.getElementById("mail-wrong");
        mailInput.style.background = "pink"; 
        mailInvalidInput.innerHTML = invalidMail;
        mailInvalidInput.style.display = "block";
        document.getElementById("mail").classList.add("form-input-invalid");
        return false;
        } else {
          reset("mail", "mail-wrong");
          document.getElementById("mail").classList.add("form-input-valid");
          return true;
          }
    }
      
    //Validate Password

    const password = document.getElementById("password");
      password.addEventListener("focus", function( event ) {
        event.target.style.background = "";    
      }, true);
      password.addEventListener("blur", function( event ) {
        validatePassword(); 
      }, true);

    function validatePassword(){
      const password = document.getElementById("password").value;
      const lettersAmount = password.length;
      const gotNumbersandletter = numbersEr.test(password);
      const invalidPassword = "At least 8 characters, consisting of letters and numbers.";

      if (lettersAmount < 8 || !gotNumbersandletter) {
       const passwordInvalidInput = document.getElementById("password-wrong");
       passwordInvalidInput.innerHTML = invalidPassword;
       passwordInvalidInput.style.display = "block";
       document.getElementById("password").classList.add("form-input-invalid");
       return false;
      }else{
        reset("password", "password-wrong");
        document.getElementById("password").classList.add("form-input-valid");
        return true;
      }
    }

    //Validate Repeat Password
    
    const repPassword = document.getElementById("repeat-password");
    repPassword.addEventListener("focus", function( event ) {
      event.target.style.background = "";    
    }, true);
    repPassword.addEventListener("blur", function( event ) {
      validatePassword(); 
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
       return false;
      }else{
        reset("repeat-password", "repeat-wrong");
        document.getElementById("repeat-password").classList.add("form-input-valid");
        return true;
      }
    }

    //Validate age

    const age = document.getElementById("age");
      age.addEventListener("focus", function( event ) {
        event.target.style.background = "";    
      }, true);
      age.addEventListener("blur", function( event ) {
        validateAge(); 
      }, true);

    function validateAge() {
      const age = document.getElementById("age").value;
      const invalidAge = "You are too young";
      
      if (age < 18) {
        const ageInvalidInput = document.getElementById("age-wrong");
        ageInvalidInput.innerHTML = invalidAge;
        ageInvalidInput.style.display = "block";
        document.getElementById("age").classList.add("form-input-invalid");
        return false;
      } else {
        reset("age", "age-wrong");
        document.getElementById("age").classList.add("form-input-valid");
          return true;
        }
      }

    //Validate TEL
    const tel = document.getElementById("tel");
    tel.addEventListener("focus", function( event ) {
      event.target.style.background = "";    
    }, true);
    tel.addEventListener("blur", function( event ) {
      validateTel(); 
    }, true); 

    function validateTel() {
      const tel = document.getElementById("tel").value;
      const numberAmount = tel.length;
      const invalidTel = "Number of at least 7 digits, do not accept spaces, hyphens or parentheses.";
      const space = tel.indexOf(" ");
      const character = new RegExp('^[+0-9]+[^-_()\\s]$');

      if (numberAmount <7 || space !==-1|| !character.test(tel)){
        const telInvalidInput = document.getElementById("tel-wrong");
        telInvalidInput.innerHTML = invalidTel;
        telInvalidInput.style.display = "block";
        document.getElementById("tel").classList.add("form-input-invalid");
        return false;
      } else {
        reset("tel", "tel-wrong");
        document.getElementById("tel").classList.add("form-input-valid");
        return true;

      }
    }

    //Validate Adress
    const adress = document.getElementById("adress");
    adress.addEventListener("focus", function( event ) {
      event.target.style.background = "";    
    }, true);
    adress.addEventListener("blur", function( event ) {
      validateAdress(); 
    }, true); 

    function validateAdress(){
      const adress = document.getElementById("adress").value;
      const lettersAmount = adress.length;
      const space = adress.indexOf(" ");
      const character = new RegExp('^[a-zA-Z0-9\\s]+$');
      const invalidAdress = "At least 5 characters, with letters, numbers and a space";

      if (lettersAmount < 5 || space ===-1 || !character.test(adress)) {
        const adressInvalidInput = document.getElementById("adress-wrong");
        adressInvalidInput.innerHTML = invalidAdress;
        adressInvalidInput.style.display = "block";
        document.getElementById("adress").classList.add("form-input-invalid");
        return false;
      } else {
        reset("adress", "adress-wrong");
        document.getElementById("adress").classList.add("form-input-valid");
        return true;
      }
    }

    //Validate City

    const city = document.getElementById("city");
    city.addEventListener("focus", function( event ) {
      event.target.style.background = "";    
    }, true);
    city.addEventListener("blur", function( event ) {
      validateCity(); 
    }, true); 

    function validateCity(){
      const city = document.getElementById("city").value;
      const letterAmount = city.length;
      const invalidCity = "At least 3 characters.";

      if (letterAmount <3) {
        const cityInvalidInput = document.getElementById("city-wrong");
        cityInvalidInput.innerHTML = invalidCity;
        cityInvalidInput.style.display = "block";
        document.getElementById("city").classList.add("form-input-invalid");
        return false;
      } else {
        reset("city", "city-wrong");
        document.getElementById("city").classList.add("form-input-valid");
        return true;
      }
    }

    //Validate ZIP-Code
  
    const zcode = document.getElementById("zip-code");
    zcode.addEventListener("focus", function( event ) {
      event.target.style.background = "";    
    }, true);
    zcode.addEventListener("blur", function( event ) {
      validateCode(); 
    }, true); 

    function validateCode(){
      const zcode = document.getElementById("zip-code").value;
      const numberAmount = zcode.length;
      const invalidZcode = "At least 3 characters.";
      
      if (numberAmount <= 3) {
        zcodeInvalidInput = document.getElementById("zcode-wrong");
        zcodeInvalidInput.innerHTML = invalidZcode;
        zcodeInvalidInput.style.display = "block";
        document.getElementById("zip-code").classList.add("form-input-invalid");
        return false;
      } else {
        reset("zip-code", "zcode-wrong");
        document.getElementById("zip-code").classList.add("form-input-valid");
        return true
      }
    }
    //Validate DNI
    const dni = document.getElementById("dni");
    dni.addEventListener("focus", function( event ) {
      event.target.style.background = "";    
    }, true);
    dni.addEventListener("blur", function( event ) {
      validateDni(); 
    }, true); 

    function validateDni (){
      const dni = document.getElementById("dni").value;
      const numberAmount = dni.length;
      const invalidDni = "7 or 8 digit number.";
      
      if (numberAmount <7) {
        dniInvalidInput = document.getElementById("dni-wrong");
        dniInvalidInput.innerHTML = invalidDni;
        dniInvalidInput.style.display = "block";
        document.getElementById("dni").classList.add("form-input-invalid");
        return false;
      } else {
        reset("dni", "dni-wrong", "form-imput-invalid");
        document.getElementById("dni").classList.add("form-input-valid");
        return true
      }
    }
   
    //Validation form
    
    document.getElementById("submit").addEventListener('submit', function validateForm(){

      const errorFields ='';
      const correctFields = '';

      //NAME

      isNameValid = validateName();
      if (isNameValid) {
        correctFields = correctFields + 'Your name is: '+ document.getElementById("name").value + '\n'
      }
      else {
          errorFields = errorFields + 'Full name field has errors. \n';
      }
        alert (correctFields + errorFields);

      //EMAIL

      isEmailValid = validateMail();
      if (isEmailValid) {
        correctFields = correctFields + 'Your E-mail is: '+ document.getElementById("mail").value + '\n'
      } 
      else {
        errorFields = errorFields + 'Your E-mail has error. \n';
      }
      alert (correctFields + errorFields);

      //PASSWORD

      isPasswordValid = validatePassword();
      if (isPasswordValid) {
        correctFields = correctFields + 'Your password is: '+ document.getElementById("password").value + '\n'
      } 
      else {
        errorFields = errorFields + 'the password must have at least 8 characters with letters and numbers. \n';
      }
      alert (correctFields + errorFields);

      //PASSWORD REPEAT

      isRepeatPasswordValid = validateRepeatpassword();
      if (isRepeatPasswordValid) {
        correctFields = correctFields + 'Your password is: '+ document.getElementById("repeat-password").value + '\n'
      } 
      else {
        errorFields = errorFields + 'Your password is not the same. \n';
      }
      alert (correctFields + errorFields);

      //AGE

      isAgeValid = validateAge();
      if (isAgeValid) {
        correctFields = correctFields + 'Your age is: '+ document.getElementById("age").value + '\n'
      } 
      else {
        errorFields = errorFields + 'You must be 18 years of age or older. \n';
      }
      alert (correctFields + errorFields);

      //PHONE

      isPhoneValid = validatePhone();
      if (isPhoneValid) {
        correctFields = correctFields + 'Your phone number is: '+ document.getElementById("tel").value + '\n'
      } 
      else {
        errorFields = errorFields + 'The phone must have 7 digits or more, no dots or dashes \n';
      }
      alert (correctFields + errorFields);
      
      //ADRESS

      isAdressValid = validateAdress();
      if (isAdressValid) {
        correctFields = correctFields + 'Your adress is: '+ document.getElementById("adress").value + '\n'
      } 
      else {
        errorFields = errorFields + 'The address must have at least 5 characters with letters and numbers and space in the middle \n';
      }
      alert (correctFields + errorFields);

      //CITY

      isCityValid = validateCity();
      if (isCityValid) {
        correctFields = correctFields + 'Your City is: '+ document.getElementById("city").value + '\n'
      } 
      else {
        errorFields = errorFields + 'The city must have at least 3 characters \n';
      }
      alert (correctFields + errorFields);

      //ZIP-CODE
      isZcodeValid = validateCode();
      if (isZcodeValid) {
        correctFields = correctFields + 'Your zip code is: '+ document.getElementById("zip-code").value + '\n'
      } 
      else {
        errorFields = errorFields + 'The zip must have at least 3 characters \n';
      }
      alert (correctFields + errorFields);
    
    //DNI
    isDniValid = validateDni();
      if (isDniValid) {
        correctFields = correctFields + 'Your DNI is: '+ document.getElementById("dni").value + '\n'
      } 
      else {
        errorFields = errorFields + 'The dni must have 7 or 8 digits \n';
      }
      alert (correctFields + errorFields);
    
    //SUBMIT

    if (!correctFields) {
      alert(correctFields);
    } else {
      alert(errorFields);
    }
    }
)}