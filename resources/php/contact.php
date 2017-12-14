<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "samuel@samuelculpepper.com";
$subject = "Contact Form Submitted";
$body = "CONTACT FORM SUBMITTED \n\n $name \n\n $email \n\n $message";
mail($to, $subject, $body);

echo "Thank you for getting in touch."
?>
