<?php
// Respond with JSON
header('Content-Type: application/json');

// Check if it's a POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // 1. Sanitize Inputs
    $name = strip_tags(trim($_POST["name"]));
    $phone = strip_tags(trim($_POST["phone"]));
    $date = strip_tags(trim($_POST["date"]));
    $message = strip_tags(trim($_POST["message"]));

    // 2. Validation (Simple)
    if (empty($name) || empty($phone) || empty($date)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Please complete all required fields."]);
        exit;
    }

    // 3. Email Configuration
    $recipient = "jitendrachadar.jc@gmail.com";
    $subject = "New Appointment Request from $name";
    
    $email_content = "Name: $name\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Preferred Date: $date\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: webmaster@avantikagastrocare.com\r\n";
    $email_headers .= "Reply-To: $phone\r\n"; // Using phone as reply-to for ease, or use a noreply

    // 4. Send Email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Thank you! Your message has been sent."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Oops! Something went wrong and we couldn't send your message."]);
    }

} else {
    // Not a POST request
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "There was a problem with your submission, please try again."]);
}
?>
