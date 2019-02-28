<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];

$email_from ='jajibade1@gmail.com'
$email_subject = 'New Form Submission'
$email_body = "Username: $name. \n".
$email_body = "User Name: $email"

$to = "jajibade1@gmail.com
$headers = "From: $email_from \r\n;
$headers .= "Reply-To: $email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: App.js");
?>