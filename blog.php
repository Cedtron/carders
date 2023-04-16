<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title> blog</title>


<link rel="stylesheet" href="css/edt.css">
<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="css/mg.css">
<link rel="stylesheet" type="text/css" href="icon/flaticon.css">
<link href="icon/favicon.ico" rel="shortcut icon"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">


</head>
<body>



<header>

<nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <img src="icon/fl.png">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active"><a href="index.html" class="text-light"><i class="flaticon-cake"></i> Birthday cards <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
      <a href="lv1.html" class="text-light"><i class="flaticon-love-message"></i> love cards</a>
      </li>
      <li class="nav-item">
        <a href="xm1.html" class="text-light"><i class="flaticon-christmas-tree"></i> Christmas cards</a>
      </li>
      <li class="nav-item">
       <a href="success.html" class="text-light"><i class="flaticon-trophy"></i> Success cards</a>
      </li>
      <!-- <li class="nav-item">
        <a href="sp.html" class="text-light"><i class="flaticon-love-letter"></i> Special cards</a>
      </li> -->
    </ul>
  </div>
</nav>


</header>


<br/>
<div class="sdnv">

<?php
$servename="localhost";
$user = "root";
$password = ""; 
$database = "card";
$conn = new mysqli($servename, $user, $password, $database);

// $servename="fdb29.awardspace.net";
// $user = "3671756_omega";
// $password = "cedric20allan"; 
// $database = "3671756_omega";
// $conn = new mysqli($servename, $user, $password, $database,);


$dt = "SELECT  * FROM blog;" ;
  $res = mysqli_query($conn, $dt);
  $rescheck = mysqli_num_rows($res);

if ( $rescheck > 0) {
  while ($row = mysqli_fetch_assoc($res)) {
    
     

echo '

<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Comment</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody class="table table-dark table-borderless">
    <tr>
      <th scope="row">'.$row['Id'].'</th>
      <td>'.$row['nam'].'</td>
      <td>'.$row['comm'].'</td>
      <td>'.$row['tym'].'</td>
    </tr>
    <tr>
     
  </tbody>
</table>

';
}
}

?>

</div>




</div>
 <footer class="db col-sm-12">

<ul>
<li><a href="about.html" class="text-light">About us</a></li>
<li><a href="" class="text-light">contact us</a></li>
<small>All rights are resevered by Zlsoft</small>
</ul>

</footer>   

<script type="text/javascript" src="js/jquery-3.6.0.js"></script>
<script type="text/javascript" src="js/html2canvas.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>
<script type="text/javascript" src="js/popper.js"></script>
<script type="text/javascript" src="js/sp.js"></script>

<script>
</script>


</body>
</html>