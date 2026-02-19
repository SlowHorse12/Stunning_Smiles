<?php /*
ini_set('display_errors', 1);
error_reporting(E_ALL);
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address
    $to = "holisticdentistrysantarosa@gmail.com"; // Change this to your email address
    $subject = "Contact Form Submission from $name";
    
    // Create the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Message:\n$message\n";

    // Create the email headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Thank you for your message. We will get back to you soon!";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
}
?>
