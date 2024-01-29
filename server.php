<?php 
    $jsonFile = file_get_contents('file.json');

    header('contet-type: application/json');

    echo $jsonFile;
?>