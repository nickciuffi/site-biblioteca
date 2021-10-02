<?php
header("Cache-Control: no-cache, no-store, must-revalidate"); // limpa o cache
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");

$servidor = 'localhost';
$usuario  = 'aluno';
$senha    = 'etec@147';
$banco    = 'aluno_3DS_Biblioteca';


$email = $_POST["email"];
$senha_user = $_POST["senha"];

    try {
        $conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario, $senha);
        $conecta->exec("set names utf8"); //permite caracteres latinos.
        $consulta = $conecta->prepare("select * from tb03_usuario where tb03_email = '" . $email . "' and tb03_senha = '" . $senha_user . "'");
        $consulta->execute();
        $resposta = $consulta->fetchAll();
    } catch (PDOException $e) {
        $resposta["erro"] = $e->getMessage(); // opcional, apenas para teste
    }    

$json = json_encode($resposta);
echo ($json);










