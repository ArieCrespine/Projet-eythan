<?php
ini_set( 'display_errors', 1 );
error_reporting( E_ALL );

$firstname = $lastname = $email = $tel = $choix_formation = $situation_pro = $temps_travail =  "";
$firstnameError = $lastnameError = $emailError = $telError =  "";

    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $choix_formation = $_POST['choix-formation'];
    $situation_pro = $_POST['situation_pro'];
    $temps_travail = $_POST['temps_travail'];


    $emailText = $firstname . ' ' . $lastname .  "\r\n" . $email . "\r\n" . $tel . "\r\n" . $choix_formation . "\r\n" . $situation_pro . "\r\n" . "Travaille 24 mois depuis 2015: " . $temps_travail ;


    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'From:' . $firstname . $lastname . ' <' . "contact@formation-cpf-eligible.fr" . '>' . "\r\n" .
    'Reply-To:' . $email . "\r\n" .
    'Content-Type: text/plain; charset="utf-8"; DelSp="Yes"; format=flowed ' . "\r\n" .
    'Content-Disposition: inline' . "\r\n" .
    'Content-Transfer-Encoding: 7bit' . " \r\n" .
    'X-Mailer:PHP/' . phpversion();   

if (!empty($firstname) && !empty($email) && !empty($tel)) {
    mail("contact@formation-cpf-eligible.fr", "Lead", $emailText, $headers);
$firstname = $lastname = $email = $tel = "";
    
}
?>