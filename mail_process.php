<meta name="author" content="Kalp Shah">
<?php
    // Data Fetch
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $msg = $_POST['msg'];
    $subject = $_POST['subject'];
   



    // PHP Mailer Boiler Plate Starts
    // PHP Mailer file is imported through required
    require 'phpmail/PHPMailerAutoload.php';
    // PHP Mailer OBject is created
    $mail = new PHPMailer;

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $mail->SMTPDebug = 3;                               // Enable verbose debug output

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->SMTPSecure = 'STARTTLS';
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    // Email From the mail is send
    $mail->Username = 'bhimanirashi@gmail.com';                 // SMTP username
    // Password of the mail
    $mail->Password = 'qazplm@246';                           // SMTP password
    // This will display From where and whom mail is send
    $mail->setFrom('bhimanirashi@gmail.com','Industree');
    // This th place where you add the recipent mail id 
    $mail->addAddress('industree108@gmail.com','Industree');     // Add a recipient
    
   // $mail->addReplyTo('info@example.com', 'Information');
    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = 'Enquiry for  : ' .$subject ;

    //$message = '<html><body>';

    $mail->Body .= '<h3 style="color:black;">Name: '.$fname.'&nbsp;'.$lname.' </h3>';
    $mail->Body .= '<h3 style="color:black;">Email: '.$email.' </h3>';
    $mail->Body .= '<h3 style="color:black;">Phone: '.$phone.' </h3>';
    $mail->Body .= '<h3 style="color:black;">Message: '.$msg.' </h3>';
    // PHP Mailer Boiler Plate Ends
    
   
    //$mail->Body .= '</body></html>';


    if ($mail->send()) {

        echo 'Success.';
        header('location:index.html');

    } else {

        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    }
?>