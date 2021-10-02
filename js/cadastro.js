var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  
var nome = document.getElementById("nome").value;
var email = document.getElementById("email").value;
var senha = document.getElementById("senha").value;
var senha2 = document.getElementById("senha2").value;

if(nome != "" && email != "" && senha != "" && senha2 != ""){
  if(senha == senha2){
    if(senha.length > 7){
      if(email.includes("@")){
        cadastra(nome, email, senha, senha2)
      }
      else{
        alert("Você deve digitar um email válido!")
      }
      
    }
    else{
      alert("A senha deve ter pelo menos 7 caracteres!")
    }
  }
  else{
    alert("As duas senhas devem ser iguais!");
  }
}
else{
  alert("Por favor preenxa todos os campos do formulário!")
}

})




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
              alert("Erro no navegador!");
              return;
          }
      }
  }

  ajaxRequest.onreadystatechange = function () {
      if (ajaxRequest.readyState === 4) {

          var data = ajaxRequest.responseText;
          console.log(data);
          if(data){
            alert("conta cadastrada!")
          }
          else{
            alert("algo deu errado, tente novamente mais tarde!")
          }
          // do something with response data...
      }
  }

 

console.log(nome + ", " + email + ", " + senha)

  var formData = new FormData();
  formData.append("nome", nome);
  formData.append("mail", email);
  formData.append("senha", senha);
  ajaxRequest.open('POST', 'https://aluno.etecarmine.com.br/3DS/Biblioteca/API/Cadastro_user.php', true); 
  ajaxRequest.send(formData);
}