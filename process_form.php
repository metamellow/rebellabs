<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $project = $_POST["project"];
    $discord = $_POST["discord"];
    $twitter = $_POST["twitter"];
    $userMessage = $_POST["userMessage"];
    
    // Configure your email addresses
    $email1 = "segueoflukso@gmail.com";
    $email2 = "matheus.merp@gmail.com";
    
    // Send email to the first address
    mail($email1, "Form Submission from $name", "Name: $name\nEmail: $email\nProject: $project\nDiscord: $discord\nTwitter: $twitter\nMessage: $userMessage");
    
    // Send email to the second address
    mail($email2, "Form Submission from $name", "Name: $name\nEmail: $email\nProject: $project\nDiscord: $discord\nTwitter: $twitter\nMessage: $userMessage");
    
    // Redirect to a thank you page or display a success message
    header("Location: thank_you.html");
    exit();
}
?>
