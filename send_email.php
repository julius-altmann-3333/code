<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set up email
    $to = "your_email@example.com"; // Change this to your email
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed.";
    }
}
?>
