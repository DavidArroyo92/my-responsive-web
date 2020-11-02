
//Para q evitar que se ejecute la accion antes que se renderize el html

window.onload = function(){

      var titulo = document.getElementById("header-title");
      titulo.style.background="navy";
      titulo.style.color="#fff";

      
    //Declarate VAR

    /*
    var form = document.getElementByTagName("form")
    var name = document.getElementById("name");
    var mail = document.getElementById("mail");
    var password = document.getElementById("password");
    var age = document.getElementById("age");
    var tel = document.getElementById("tel");
    var adress = document.getElementById("adress");
    var city = document.getElementById("city");
    var code = document.getElementById("code");
    var dni = document.getElementById("dni");
    */

    // Form 

    var form = document.getElementsByTagName("form")[0];

    //validate Name

    var validateName = function(e){
      if (form.name.value === false){
        alert("completar nombre");
        e.preventDefault();
      }

    }

    //Validate email

    var validateMail = function(){
    var mail = document.getElementById("mail").value;
    return /'@'/.test(mail.value);
    }

    //Validate Password

    var validatePasword =function(e){
      var password = document.getElementById("password").value;
      if (password.length < 6) {
        alert("la contraseña debe tener mas de seis letras");
        e.preventDefault();
      }
    }

    //Validate age

    function validateAge(e) {
        var age = document.getElementById("age").value;
        if (age > 18) {
          alert("eres menor de edad");
          e.preventDefault();
        }
    }
    //Validate TEL

    function validateTel(e) {
      var tel = document.getElementById("tel").value;
      if (isNaN(tel)){
          alert("escribe un numero de telefono valido");
          e.preventDefault();
        }
    }

    //Validate Adress
    function validateAdress(e){
      var adress = document.getElementById("adress").value;
      if (adress.length <5) {
        alert("direccion incorrecta");
        e.preventDefault();
      }
    }

    //Validate City

    function validateCity(e){
      var city = document.getElementById("city").value;
      if (city.length <3) {
        alert("Vuelve a escribir tu ciudad");
        e.preventDefault();
      }


    //Validate Code

    function validateCode (e){
      var code = document.getElementById("code").value;
      if ((code.length <3) && isNaN(code))  {
        alert("el codigo postal tiene que ser un numero de mas de 3 digitos");
        e.preventDefault();
      }

    //Validate DNI

    function validateDni (e){
      var dni = document.getElementById("dni").value;
      if ((code.length <=8) && isNaN(code))  {
        alert("el codigo postal tiene que ser un numero de mas de 3 digitos");
        e.preventDefault();
      }

    //Validate Form

    var validateAll= function(e){
                validateName(e);
                validateEmail(e);
                validatePasword(e);
                validateAge(e);
                validateTel(e);
                validateAdress(e);
                validateCity(e);
                validateCode(e);
                validateDni(e);
    }

  
    /*
    form.addEventListener.('submit', validateAll)}
    }
    */
}

