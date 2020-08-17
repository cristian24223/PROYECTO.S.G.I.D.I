<?php
$con=mysqli_connect('localhost','root','','turnosdb') or die('error en la conexion');
    
    $sql = "INSERT INTO turnos 
    VALUES(null,'".$_POST["organismo"]."','".$_POST["nombres"]."','".$_POST["legajo"]."','".$_POST["correo"]."'
    ,'".$_POST["pass"]."')";
    
    $result = mysqli_query($con, $sql) or die ('Error en el query database');
    mysqli_close($con);
    echo 'El organismo ingresado es :'.$_POST["organismo"];
    echo 'El nombre ingresado es : '.$_POST["nombres"];
    echo 'El legajo ingresado es :'.$_POST["legajo"];
    echo 'El correo es: '.$_POST["correo"];
    echo 'El sexo es: '.$_POST['pass'];

    ?>
    
