var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  
var email = document.getElementById("email").value;
var senha = document.getElementById("senha").value;

var ajaxRequest;
  try {
      ajaxRequest = new XMLHttpRequest();
  } catch (e) {
      try {
          ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
          try {
              ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (e) {
              alert("Erro no navegador!");
              return;
          }
      }
  }

  ajaxRequest.onreadystatechange = function () {
      if (ajaxRequest.readyState === 4) {

          var data = ajaxRequest.responseText;
           if(data != "[]"){
               var strng = JSON.parse(data)
          logar(strng[0][0], strng[0][2])
          }
          else{
            alert("Erro!")
          }
          // do something with response data...
      }
  }

 


  var formData = new FormData();
  
  formData.append("email", email);
  formData.append("senha", senha);
  ajaxRequest.open('POST', 'https://aluno.etecarmine.com.br/3DS/Biblioteca/API/login.php', true); 
  ajaxRequest.send(formData);

});


function logar(email_store, nome_store){
    localStorage.setItem("email", email_store);
    localStorage.setItem("logged", true);
    localStorage.setItem("nome", nome_store);
}