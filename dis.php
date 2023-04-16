<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title> Carders</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <link href="https://fonts.googleapis.com/css2?family=Redressed&display=swap" rel="stylesheet">  
<link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css?family=Akaya+Telivigala&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"> 


<link rel="stylesheet" href="css/grid.css">
<link rel="stylesheet" href="css/mg.css">
<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="css/bootstrap-icons.css">
<link href="icon/favicon.ico" rel="shortcut icon"/>
<link rel="stylesheet" type="text/css" href="icon/flaticon.css">
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
              <li class="nav-item active"><a href="index.html" class="text-dark"><i class="flaticon-cake"></i> Birthday cards <span class="sr-only">(current)</span></a>
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

    <div class="wrapper">
        <!-- Sidebar  -->
        <div id="sidebar">
            <div class="sdnv">
                <h3>How to use</h3>
            The frist prompt you use it to input the name
             of the person you are sending to After<br>
            You press the <u><b>From</b></u> button to input your name.<br/>
    <b>How save your Card</b><br/>
    Click on this button first
    <img src="icon/fullscreen.svg"> <br/>
    then you click on this download button
    <img src="icon/dl.svg"><br/>
    <b>How to share your card</b><br/>
    you just click on this button
    <img src="icon/whatsapp.svg">
    <br/>
    <b><u><h3>Button list and there uses</h3></u></b>
    This is used to change card content.
    <img src="icon/text.png"><br/>
    This button is used to change images.
    <img src="icon/nx.png"><br/>
    This button is used to change colors on the card.
    <img src="icon/color.png"><br/>
    This button is used to fonts to the card.
    <img src="icon/font.png"><br/>
    This button is used to remove/add borders to the card.
    <img src="icon/border.png"><br/>
    </div>
        </div>

        <!-- Page Content  -->

        <div id="content">

        <div class="container col-10 col-lg-12 heg">
    <div class="row">

        <div class="col-md-8">

     <button type="button" id="sidebarCollapse" class="bm" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Help?">
                <i class="bi-grid-1x2"></i>
            </button>
                  

                        <div class="bts">            
                          <ul>
                            <li class="tab" id="tab-1"><button data-bs-toggle="tooltip" data-bs-placement="bottom"  title="Color change">
                              <img src="icon/color.png"></button></li>
                            <li class="tab" ><button data-bs-toggle="tooltip" data-bs-placement="bottom" onclick="fon()" title="font changing">
                              <img src="icon/font.png"></button></li>
                            <li class="tab" id="tab-3"><button data-bs-toggle="tooltip" data-bs-placement="bottom" title="border change">
                            <img src="icon/border.png"></button></li>

                            <li  id="down"><button ><img src="icon/dl.svg"></button></li>


                          </ul>
                      
                        </div>

<?php
$fin=$_POST['your'];
$to=$_POST['to'];
$dt=$_POST['ms'];

$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["picz"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
If(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    If($check !== false) {
        Echo "File is an image – " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        Echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
If (file_exists($target_file)) {
    Echo "<div class='dis'>Sorry, file already exists.</div>";
    $uploadOk = 0;
}
 //Check file size
else If ($_FILES["picz"]["size"] > 100000000) {
    Echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
else If($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    Echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
else If ($uploadOk == 0) {
    Echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    If (move_uploaded_file($_FILES["picz"]["tmp_name"], $target_file)) {
        Echo "<div class='dis'>The file ". Basename( $_FILES["picz"]["name"]). " has been uploaded.</div>";
    } else {
        Echo "Sorry, there was an error uploading your file.";
    }
}
echo"<div id='bg' class='col-sm-12'>";


 $image=$_FILES["picz"]["name"]; 
              $img="uploads/".$_FILES["picz"]["name"];
             
              echo "<img src='".$img."' class='im' />"; 


   echo " <div class='sty' id='sty'>

<u><i id='name'>".$to."</i></u><br/>".$dt.
"
 <br/><u><i id='las'>".$fin.
 "</i></u><br/>
 </div><div class='ad'><img src='icon/pp.png'><br/>
www.carders.com</div>
</div>

    <p id='name'></p>
";

?>

<div id="view">
                    </div>
               
                
        </div>  
          
        
        
        <div class="col-12 col-md-4">
          
<div class="ads">

<div class="ad1">

<img src="images/267322-P57QTH-608.jpg" class="col-6" >
</div>

<div class="ad2">

<img src="images/cap.png" class="col-6" >

</div>
  
  </div>
   <footer class="db">
  
            <ul>
            <li><a href="about.html" class="text-light">About us</a></li>
            <li><a href="https://zlnsoft-corp.business.site" class="text-light">contact us</a></li>
            <small>All rights are resevered by Zlsoft</small>
            </ul>
            
            </footer> 
  
        </div>
    </div>
  </div>
  
        
   
        </div>
       
        <script type="text/javascript" src="js/html-to-image/dist/html-to-image.js"></script>
        <script type="text/javascript" src="js/jquery-3.6.0.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <script type="text/javascript" src="js/popper.js"></script>
         <script type="text/javascript" src="js/sp.js"></script>
        
    <script type="text/javascript">
    
    </script>
</body>

</html>