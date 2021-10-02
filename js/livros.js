var livro = document.querySelector("#busca-livro");
var cards = document.getElementById("cards");
var string;
var content;

livro.addEventListener('keydown', function(){
    fetch('https://aluno.etecarmine.com.br/3DS/Biblioteca/API/livros_listar.php?titulo=' + livro.value)
    .then(res => res.json())
    .then(res => {
       
            string = JSON.parse(JSON.stringify(res))
           colocaTela(string.mensagem)
       } )
    .catch(function(data){
        console.log(data)
    }
       
    )
    
    
});


function colocaTela(data){
   content = "";
    for(var x = 1; x < data.length; x++){
content += "<div class='card z-depth-4'>";
content += "<div class='titulo'>" + data[x].tb01_titulo + "</div>";
content += "<div class='disponibility'>" + dispo(data[x].tb01_disponibilidade) + "</div>";
content += "<div class='disc'>Este é um livro sobre " + data[x].tb01_assunto_1 + ", que foi escrito por " + data[x].tb01_autor + " e foi publicado no ano de " + data[x][9] + " pela editora " + data[x].tb01_editora + " .</div>";
content += "</div>";


    }
console.log(content)
cards.innerHTML = content;
}

function dispo(disp){
    if(disp == "D"){
        return "Disponível"
    }
    else{
        return "Indisponível"
    }
}
  

