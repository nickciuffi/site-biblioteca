
$(document).ready(function(){
  if(verificaLog()){
     mudaMenu();
  }
  else{
      return;
  }
})

function verificaLog(){
    var logged = localStorage.getItem("logged");
    if(logged == "true"){
        return true;
    }
}
function getIcon(){
    var nome = localStorage.getItem("nome");
    $("#icon-perf").attr("src", "https://avatars.dicebear.com/api/initials/" + nome + ".svg")
    $("#icon-perf-mob").attr("src", "https://avatars.dicebear.com/api/initials/" + nome + ".svg")
}
function mudaMenu(){
    getIcon();  
    //tira login e cadastro
    $(".some-logged").css("display", "none");

    //adiciona itens no menu
    $(".perfil").css("display", "flex");
    $(".aparece-logged").css("display", "block");


}

$("#perfil").click(function(){
    $("#nome-modal").text("Nome: " + localStorage.getItem("nome"));
    $("#email-modal").text("Email: " + localStorage.getItem("email"));
   
    $(".modal-perf").css("display", "block");
})
$("#perfil-mob").click(function(){
    $("#nome-modal-mob").text("Nome: " + localStorage.getItem("nome"));
    $("#email-modal-mob").text("Email: " + localStorage.getItem("email"));
   
    $("#modal-perf-mob").css("display", "block");
})

function sair(){
    localStorage.setItem("logged", "false");
}

//Esconde o modal
$(document).mouseup(function(e){
    var container = $(".modal-perf");
 
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
        container.hide();
    }
})



