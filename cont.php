<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Cont</title>
</head>
<body>
    <?php
$servename="localhost";
$user = "root";
$password = ""; 
$database = "carder";
$conn = new mysqli($servename, $user, $password, $database);

// $servename="fdb29.awardspace.net";
// $user = "3671756_omega";
// $password = "cedric20allan"; 
// $database = "3671756_omega";
// $conn = new mysqli($servename, $user, $password, $database,);

$nam=$_GET['email'];
$nam=$_GET['name'];
$blog=$_GET['blogx'];

$sql = "INSERT INTO blog ( nam, comm, tym) VALUES ('$nam', '$blog', CURDATE())";
if(mysqli_query($conn, $sql)){
    echo "Your view has been submited successful.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
 
// Close connection
mysqli_close($link);


    ?>
    
</body>
</html>