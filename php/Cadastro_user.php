<?php
header("Cache-Control: no-cache, no-store, must-revalidate"); // limpa o cache
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");

$servidor = 'localhost';
$usuario  = 'aluno';
$senha    = 'etec@147';
$banco    = 'aluno_3DS_Biblioteca';


$senha_user = $_POST["senha"];
$email_user = $_POST["mail"];
$nome = $_POST["nome"];
    try {
        $conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario, $senha);
        $conecta->exec("set names utf8"); //permite caracteres latinos.
        $consulta = $conecta->prepare("INSERT INTO tb03_usuario (`tb03_email`, `tb03_senha`, `tb03_nome`) VALUES ('" . $email_user . "', '" . $senha_user . "', '" . $nome . "')");
        $consulta->execute();
        $resposta["mensagem"] = $consulta->fetchAll();
    } catch (PDOException $e) {
        $resposta["erro"] = $e->getMessage(); // opcional, apenas para teste
    }    

$json = json_encode($resposta);
echo ($json);
