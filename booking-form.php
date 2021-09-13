<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if($_POST) {
	$startDate = "";
   $endDate = "";
   $passengers = "";
   $bookingName = "";
	$email = "";
	$email_body = "<div>";
	$recipient = "marusia.petrova.m@gmail.com ";

   // start date
	if(isset($_POST['startDate'])) {
		$startDate = filter_var($_POST['startDate'], FILTER_SANITIZE_STRING);
		$email_body .= "<div>
								<label><b>Booking Start Date:</b></label>&nbsp;<span>".$startDate."</span>
							</div> </br> </br>";
	}

   // end date
	if(isset($_POST['endDate'])) {
		$endDate = filter_var($_POST['endDate'], FILTER_SANITIZE_STRING);
		$email_body .= "<div>
								<label><b>Booking End Date:</b></label>&nbsp;<span>".$endDate."</span>
							</div> </br> </br>";
	}


   // passengers
	if(isset($_POST['passengers'])) {
		$passengers = filter_var($_POST['passengers'], FILTER_SANITIZE_STRING);
		$email_body .= "<div>
								<label><b>Number of passengers:</b></label>&nbsp;<span>".$passengers."</span>
							</div> </br> </br>";
	}

   // name
	if(isset($_POST['bookingName'])) {
		$bookingName = filter_var($_POST['bookingName'], FILTER_SANITIZE_STRING);
		$email_body .= "<div>
								<label><b>Booking Name:</b></label>&nbsp;<span>".$bookingName."</span>
							</div> </br> </br>";
	}

   // email 
	if(isset($_POST['bookingEmail'])) {
		$bookingEmail = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['bookingEmail']);
		$bookingEmail = filter_var($bookingEmail, FILTER_VALIDATE_EMAIL);
		$email_body .= "<div>
								<label><b>Booking Email:</b></label>&nbsp;<span>".$bookingEmail."</span>
							</div> </br> </br>";
	}


   $email_body .= "</div>";

	$subject = "This is a booking email from the Niche Lifestyle page.";

	$headers  = 'MIME-Version: 1.0' . "\r\n"
	.'Content-type: text/html; charset=utf-8' . "\r\n"
	.'From: ' . $bookingEmail . "\r\n";

	if(mail($recipient, $subject, $email_body, $headers)) {
		header('Location: thank-you.html');
	} else {
		echo '<p>We are sorry but the email did not go through.</p>';
	}

} else {
   echo '<p>Something went wrong</p>';
}
?>
