<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "bappygazi51@gmail.com";
$subject = "Mail From Bappy Gazi Site";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;

if($email!=NULL){
    mail($to,$subject,$txt);
}
//redirect
header("Location:thankyou.html");
?>