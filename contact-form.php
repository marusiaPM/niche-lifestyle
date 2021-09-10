<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if($_POST) {
	$f_name = "";
   $s_name = "";
	$email = "";
   $location = "";
	$message = "";
	$email_body = "<div>";
	$recipient = "marusia.petrova.m@gmail.com ";

   // f name 
	if(isset($_POST['f_name'])) {
		$f_name = filter_var($_POST['f_name'], FILTER_SANITIZE_STRING);
		$email_body .= "<div>
								<label><b>Visitor Name:</b></label>&nbsp;<span>".$f_name."</span>
							</div> </br> </br>";
	}

   // s name 
	if(isset($_POST['s_name'])) {
		$s_name = filter_var($_POST['s_name'], FILTER_SANITIZE_STRING);
		$email_body .= "<div>
								<label><b>Visitor Surname:</b></label>&nbsp;<span>".$s_name."</span> 
							</div> </br> </br>";
	}

   // email 
	if(isset($_POST['email'])) {
		$email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
		$email = filter_var($email, FILTER_VALIDATE_EMAIL);
		$email_body .= "<div>
								<label><b>Visitor Email:</b></label>&nbsp;<span>".$email."</span>
							</div> </br> </br>";
	}

   // location 
	if(isset($_POST['location'])) {
		$location = filter_var($_POST['location'], FILTER_SANITIZE_STRING);
		$email_body .= "<div>
								<label><b>Visitor Location:</b></label>&nbsp;<span>".$location."</span>
							</div> </br> </br>";
	}

   //message
	if(isset($_POST['message'])) {
		$message = htmlspecialchars($_POST['message']);
		$email_body .= "<div>
								<label><b>Visitor Message:</b></label>
								<div>".$message."</div> </br>
							</div>";
	}


   $email_body .= "</div>";

	$subject = "This is an inquiry email from the Niche Lifestyle page.";

	$headers  = 'MIME-Version: 1.0' . "\r\n"
	.'Content-type: text/html; charset=utf-8' . "\r\n"
	.'From: ' . $email . "\r\n";

	if(mail($recipient, $subject, $email_body, $headers)) {
		header('Location: thank-you.html');
	} else {
		echo '<p>We are sorry but the email did not go through.</p>';
	}

} else {
   echo '<p>Something went wrong</p>';
}
?>
