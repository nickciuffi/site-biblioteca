<?php
header("Cache-Control: no-cache, no-store, must-revalidate"); // limpa o cache
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");

$servidor = 'localhost';
$usuario  = 'aluno';
$senha    = 'etec@147';
$banco    = 'aluno_3DS_Biblioteca';


$nome = $_GET["titulo"];
    try {
        $conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario, $senha);
        $conecta->exec("set names utf8"); //permite caracteres latinos.
        $consulta = $conecta->prepare("select * from tb01_livros where tb01_titulo like '%" . $nome . "%' order by tb01_titulo limit 50 ");
        $consulta->execute();
        $resposta["mensagem"] = $consulta->fetchAll();
    } catch (PDOException $e) {
        $resposta["erro"] = $e->getMessage(); // opcional, apenas para teste
    }    

$json = json_encode($resposta);
echo ($json);
