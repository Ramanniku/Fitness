<?php
include("connect.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<style>
    
</style>
<body>
    <h2>Login Form</h2>
    <form name="Form" method="POST" action="">
        <label for="">User Name</label>
        <input type="text" id="user" name="user">
        <br>
        <label for="">Password</label>
        <input type="password"id="pass"name="pass">
        <br>
        <input type="submit" id ="btn" value="login" name = "submit">


    </form>
    
</body>
</html>