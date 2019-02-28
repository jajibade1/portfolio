<?php

if(isset($_POST['submit'])) {

    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "jajibade1@outlook.com";
    $headers = "Form Submission from ".$mailFrom "my website";
    $txt = "You have received an email from ".$name. ".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);

    headers ("Location: https://jamieajibade.netlify.com/?mailsend");
}

?>