
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  
cadastrar();

})
function cadastrar(){
 var nome = document.getElementById("nome").value;
var email = document.getElementById("email").value;
var senha = document.getElementById("senha").value;
var senha2 = document.getElementById("senha2").value;

if(nome != "" && email != "" && senha != "" && senha2 != ""){
  if(senha === senha2){
    
    if(senha.length > 7){
      if(email.includes("@")){
        cadastra(nome, email, senha, senha2)
      }
      else{
        Swal.fire(
          "Erro!",
          "Você deve digitar um email válido!",
          "error"
        )
      }
      
    }
    else{
      Swal.fire(
        "Erro!",
        "A senha deve ter pelo menos 8 caracteres!",
        "error"
      )
    } 
  }

  else{
     Swal.fire(
      "Erro!",
      "As duas senhas devem ser iguais!",
      "error"
    ) 
   
  }
}
else{
  Swal.fire(
    "Erro!",
    "Por favor preenxa todos os campos do formulário!",
    "error"
  )
}
}




function cadastra(nome, email, senha){
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
              Swal.fire(
                "Opssss!",
                "Parece que algo deu errado!",
                "error"
              )
              return;
          }
      }
  }

  ajaxRequest.onreadystatechange = function () {
      if (ajaxRequest.readyState === 4) {

          var data = ajaxRequest.responseText;
          console.log(data);
          if(data){
            Swal.fire({
              title: 'Conta cadastrada com sucesso!',
              text: "Agora você pode fazer o login!",
              icon: 'success',
              showCancelButton: false,
              confirmButtonColor: '#20702C',
              confirmButtonText: 'Login'
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.href = "login.html";
              }
            })
            
           
          }
          else{
            Swal.fire({
              title: 'Parece que algo deu errado!',
              text: 'Tente novamente mais tarde!',
             icon: 'error',
             confirmButtonColor: '#20702C',
             confirmButtonText: 'OK'
             
            }
            )
          }
      }
  }

 
  var formData = new FormData();
  formData.append("nome", nome);
  formData.append("mail", email);
  formData.append("senha", senha);
  ajaxRequest.open('POST', 'https://aluno.etecarmine.com.br/3DS/Biblioteca/API/Cadastro_user.php', true); 
  ajaxRequest.send(formData);
  
}