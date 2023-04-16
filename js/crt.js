
/*
var nm=prompt("The name of the recevier");
document.getElementById("name").innerHTML=nm;


function las(){
var nam=prompt("The name of the sender");

if(nam!=null){
document.getElementById("las").innerHTML=nam;}
}
*/
//store
 var username=localStorage.getItem('nm')
  var password=localStorage.getItem('las')
  //localStorage.clear()will clear everything in localStorage


//whats app link button
waCurrentPage = function() {
   return encodeURI("whatsapp://send?text= check out your Christmas card from: " +nm +" " + 'http://' + window.location.hostname + window.location.pathname);
}



//screen shot
$(document).ready(function(){

$('#sidebarCollapse').on('click',function(){
$('#side').slideToggle(400);
});
$('.sr-only').hide();
var element = $("#bg"); // global variable
var getCanvas; // global variable

    $("#show").on('click', function () {
         html2canvas(element, {
         onrendered: function (canvas) {
                $("#view").append(canvas);
                getCanvas = canvas;
             }
         });
    });

	$("#down").on('click', function () {
    var imgageData = getCanvas.toDataURL("image/png");
    // Now browser starts downloading it instead of just showing it
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    $("#down").attr("download", "carders card.png").attr("href", newData);
	});

    var i =  0;
   
    function color(){
    
        i += 1;  
    
    switch (i) {
      case 1 :
    $('.blu').addClass('.rd');
        break;
    
        case 2:
        $('.blu').addClass('br');
            break;
    
            case 3:
            $('.blu').addClass('bt');
                break;
    
                case 4:
                $('.blu').addClass('bx');
                    break;
    
                    case 5:
                    $('.blu').addClass('bs');
                        break;
    
      default:
        break;
    }
     }
    

     var i =  0;
     function call() {
      
       i +=1;  
  
     switch (i) {
          case 1 :
       var x= "hey";
       document.getElementById("name").innerHTML=x;
            break;
          case 2:
              var y="hey ayo";
              document.getElementById("name").innerHTML=y;
                break;
          case 3:
              var u="hey tsup";
          document.getElementById("name").innerHTML=u;
                    break;
          case 4:
               var d="hey hello";
              document.getElementById("name").innerHTML=d;
                        break;
          case 5:
               var c="gwe world";
              document.getElementById("name").innerHTML=c;
                            break;
          default:
            break;};
            if(i>=3){
              reset(i);
  
           };
          
          }    

});
