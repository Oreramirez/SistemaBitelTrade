<?php

    date_default_timezone_set('America/Lima'); 

    $servername = "localhost";
    $database = "trade_database";
    $username = "root";
    $password = "";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

?>