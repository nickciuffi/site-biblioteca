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

  var formData = new FormData();
  
  formData.append("email", email);
  formData.append("senha", senha);
  ajaxRequest.open('POST', 'https://aluno.etecarmine.com.br/3DS/Biblioteca/API/login.php', true); 
  ajaxRequest.send(formData);

  ajaxRequest.onreadystatechange = function () {
    if (ajaxRequest.readyState === 4) {

        var data = ajaxRequest.responseText;
         if(data != "[]"){
             var strng = JSON.parse(data)
        logar(strng[0][0], strng[0][2])
        }
        else{
          Swal.fire({
              title: 'Dados inválidos!',
              text: 'Tente mudar a senha ou o email!',
              icon: 'error',
              confirmButtonColor: '#20702C',
          })
        }
        // do something with response data...
    }
}


});


function logar(email_store, nome_store){
    localStorage.setItem("email", email_store);
    localStorage.setItem("logged", true);
    localStorage.setItem("nome", nome_store);
    
    Swal.fire({
        title: 'Login feito com sucesso!',
        text: "Agora você pode acessar o site!",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#20702C',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/";
        }
      })

}