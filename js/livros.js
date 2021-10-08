var livro = document.querySelector("#busca-livro");
var btn = document.querySelector(".search-book");
var cards = document.getElementById("cards");
var string;
var content;

btn.addEventListener('click', function(){
    if(livro.value != ""){
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
    
    }    
});


function colocaTela(data){
   content = "";
   var leng = data.length;
   if(leng > 10){
       leng = 10;
   }
    for(var x = 1; x < leng; x++){
/* content += "<div class='card z-depth-4'>";
content += "<div class='titulo'>" + data[x].tb01_titulo + "</div>";
content += "<div class='disponibility'>" + dispo(data[x].tb01_disponibilidade) + "</div>";
content += "<div class='disc'>Este é um livro sobre " + data[x].tb01_assunto_1 + ", que foi escrito por " + data[x].tb01_autor + " e foi publicado no ano de " + data[x][9] + " pela editora " + data[x].tb01_editora + " .</div>";
content += "</div>"; */

content += "<div class='card " + redBorder(data[x].tb01_disponibilidade) + " z-depth-4'><span class='dispo'>" + dispo(data[x].tb01_disponibilidade);
content += "</span><div class='titulo'>" + data[x].tb01_titulo + "</div>";
content += "<div class='subtitulo'>Descrição:</div><div class='disc-" + data[x].tb01_cod_livro + "'></div>";
content += "<div class='subtitulo'>Informações:</div>";
content += "<div class='combo-info'><div class='item'>Assunto:</div>";
content += "<div class='info'>" + data[x].tb01_assunto_1.substring(0,22) + verifySize(data[x].tb01_assunto_1, 22) + "</div></div><div class='combo-info'>";
content += "<div class='item'>Autor:</div><div class='info'>" + data[x].tb01_autor.substring(0,25) + verifySize(data[x].tb01_autor, 25) + "</div>";
content += "</div><div class='combo-info'><div class='item'>Ano de publicação:</div>";
content += "<div class='info'>" + data[x][9] + "</div></div><div class='combo-info'>";
content += "<div class='item'>Editora:</div><div class='info'>" + data[x].tb01_editora + "</div></div></div>";
getDisc(data[x].tb01_titulo, data[x].tb01_cod_livro);

    }
cards.innerHTML = content;
}

function dispo(disp){
    if(disp == "D"){
        return ""
    }
    else{
        return "Indisponível"
    }
}
function redBorder(disp){
    if(disp == "D")
    {
        return "";
    }
     else{
       return "red-border"
      }
        
    }

    function getDisc(titulo, cod){
        fetch("https://www.googleapis.com/books/v1/volumes?q=" + titulo)
        .then(res => res.json())
        .then(res => {
            var string = JSON.parse(JSON.stringify(res)); 
           $(".disc-" + cod).html(string.items[0].volumeInfo.description.substring(0,400) + verifySize(string.items[0].volumeInfo.description, 400));
        })
        .catch(function(data){
            $(".disc-" + cod).html("Descrição indisponível");
        })
    }
  
    function verifySize(disc, size){
        if(disc.length > size){
            return "...";
        }
        return ""
    }



