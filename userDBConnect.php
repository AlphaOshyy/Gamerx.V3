<?php
$conn = new mysqli('localhost', 'root', '', 'gamerx');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$CallSign  = $_POST['callsign'];
$Email = $_POST['email'];
$Password = $_POST['password'];


$sql = "INSERT INTO user (CallSign, Email, Password) VALUES ('$CallSign', '$Email', '$Password')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>