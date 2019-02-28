<?php
if(isset($_POST['Submit'])){

$name = $_POST['Name'];
$email = $_POST['Email'];
$subject = $_POST['subject'];  


$to='jajibade1@gmail.com';
$subject='Form Submission';
$message="Name: ".$name."\n". "Email: ".$email. "\n". "Subject: "."\n\n".$subject;
$headers="From: ".$email;
if(mail($to, $subject, $message, $headers)){
    echo "<h1> Sent Successfully! Thank you .$name. We will contact you shortly! </h1>";

}
else{
    echo "Something went wrong!"
}
}




?>