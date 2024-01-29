<?php 
    $jsonFile = file_get_contents('file.json');

    $decoded = json_decode($jsonFile);

    if(isset($_POST['todoInput'])){
        $todoInput = $_POST['todoInput'];
        array_push($decoded, $todoInput);
        file_put_contents('file.json', json_encode($decoded));

    }
    header('contet-type: application/json');

    echo json_encode($decoded);
?>