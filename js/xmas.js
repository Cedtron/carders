function addx(){ 
  var nm2=document.getElementById("rece").value;
        document.getElementById("name").innerHTML=nm2;
        document.getElementById("rnam").style.display="none"
        return nm2
  }
  function add(){
    var nm1= document.getElementById("sender").value;
    document.getElementById("las").innerHTML=nm1;
    document.getElementById("snam").style.display="none"

    return nm1
}
  

   
  // let
  var xmas1="<div id='num'>1</div>Christmas is not a time nor a season <br/> but a state of mind to cherish peace and goodwill,<br/>to the plenteous in mercy is to have the spirit of<br/>Christmas."
  var xmas2="<div id='num'>2</div>Fine old Christmas, <br/> with the snowy hair and ruddy face,<br/> had done his duty that year in the noblest fashion<br/> and had set off his rich gifts of warmth and color with all <br/> the heightening contrast of frost and snow." 
  var xmas3="<div id='num'>3</div>Friends like you are rear to find.<br/>You have always stood besides me in think and<br/>thin and shared my joys like they were<br/>yours Wishing a very<br/>Merry Christmas to a true friend.";
  var xmas4="<div id='num'>4</div> The rooms were very still while the pages were softly turned<br/> and the winter sunshine crept in to touch<br/> the bright heads and <br/>serious faces with a Christmas greeting."
  var xmas5="<div id='num'>5</div>The joy of brightening other lives,<br/> hearing each others burdens,<br/> casing other loads and supplanting empty hearts and<br/> lives with generous gifts becomes for us <br/> the magic of the holidays."
  var xmas6="<div id='num'>6</div>Christmas is abridge we need bridges as the rivers of time flows to the past.<br/> Today Christmas should mean creating happy hours <br/> for tomorrow and reliving those of yesterday."

  var xmass =[xmas1, xmas2, xmas3, xmas4 ,xmas5 ,xmas6],
  index=0;
  document.getElementById("dat").onclick=function(){
    document.getElementById("data").innerHTML=xmass[index];
    index=(index+1)% xmass.length;
  }
  //image
  var img1="js/sty/xm1.png";
  var img2="js/sty/xm2.png";
  var img3="js/sty/xm3.png";
  var img4="js/sty/xm4.png";
  var img5="js/sty/xm5.png";
  var img6="js/sty/xm6.png";
  
  var img =[img1, img2, img3, img4, img5],
  index=0;
  document.getElementById("img").onclick=function(){
    document.getElementById("bg").style.backgroundImage ="url("+img[index]+")";
    index=(index+1)% img.length;
  }
  
  //color
  var col1="#f38194";
  var col2="#f3ab81";
  var col3="#83a1f3fa";
  var col4="#ba73f5";
  var col5="#8df79ffa";
  var col6="#f189c3fa";
  var col7="#ad8866fa";
  var col8="RGB(205,202,197)";
  
  var col =[col1, col2, col3, col4, col5, col6, col7, col8],
  index=0;
  document.getElementById("tab-1").onclick=function(){
    document.getElementById("sty").style.backgroundColor=col[index];
    index=(index+1)% col.length;
  }
  
  //font
  var font1="Redressed";
var font2="Indie Flower";//
var font3="Satisfy";//
var font4="Homemade Apple";
var font5="Akaya Telivigala";//
var font6="Gloria Hallelujah";//
var font7="Cookie";
var font8="Lucida Handwriting";
  
  var font =[font1, font2, font3, font4,font5 ,font6 ,font7, font8],
  index=0;
  document.getElementById("font").onclick=function(){
    document.getElementById("sty").style.fontFamily=font[index];
    index=(index+1)% font.length;
  }
  
//url
const queryString =window.location.search
const query=queryString.replace('%2526','&')
const last=query.replace('%2526','&')
var par = new URLSearchParams(last)
// console.log(last)
var sname= par.get('snam');
var rname= par.get('rnam');
var con= par.get('con');

document.getElementById("snam").innerHTML=sname;
document.getElementById("rnam").innerHTML=rname;

// conduction out
if (con=="1"){
   document.getElementById("styx").innerHTML=xmas1;  
  // console.log("mwana wa kikuba")
}
else if(con=="2"){
   document.getElementById("styx").innerHTML=xmas2;
  // console.log("mwana")
}
else if(con=="3"){
   document.getElementById("styx").innerHTML=xmas3;
  // console.log("yes all")
}
else if(con=="4"){
   document.getElementById("styx").innerHTML=xmas4;
  // console.log("best")
}
else if(con=="5"){
   document.getElementById("styx").innerHTML=xmas5;
  // console.log("yes")
}
else if(con=="6"){
  document.getElementById("styx").innerHTML=xmas6;
 // console.log("yes")
}
else{
  document.getElementById("styx").innerHTML="";
}

// console.log(`hey ${sname} and this is ${rname} and ${con}`)


var main=document.getElementById('data').textContent;
var stx=document.getElementById('styx').textContent;
if (stx==""){
  document.getElementById('car').style.display="none"
  document.getElementById('data').style.display="block"
}else{
  document.getElementById('car').style.display="block"
  document.getElementById('data').style.display="none"
}


//whats app link button

waCurrentPage = function() {
  var nam1= document.getElementById("sender").value;
  var nam2=document.getElementById("rece").value;
   var dets=document.getElementById("num").textContent;
  var ur='http://' + window.location.hostname + window.location.pathname
   return encodeURI("whatsapp://send?text= check out your birthday gift from: " +nam1 +" " + ur+"?snam="+nam1+"%26&rnam="+nam2+"%26&con="+dets);
}

// url
function ural(){
  var nam1= document.getElementById("sender").value;
  var nam2=document.getElementById("rece").value;
   var dets=document.getElementById("num").textContent;
  var ur='http://' + window.location.hostname + window.location.pathname
  // console.log( ur+"?snam="+nam1+"&rnam="+nam2+"&con="+dets);
}
// RandomSource

var random =Math.floor(Math.random()*5)+1
// console.log(`so ts ${random}`)

if (random==1){
  document.getElementById("bg").style.backgroundImage ="url("+img1+")";
  document.getElementById("sty").style.backgroundColor=col1;
}else if (random==2){
  document.getElementById("bg").style.backgroundImage ="url("+img2+")";
  document.getElementById("sty").style.backgroundColor=col2;
}else if(random==3){
  document.getElementById("bg").style.backgroundImage ="url("+img3+")";
  document.getElementById("sty").style.backgroundColor=col3;
}else if(random==4){
  document.getElementById("bg").style.backgroundImage ="url("+img4+")";
  document.getElementById("sty").style.backgroundColor=col4;
}else if(random==5){
  document.getElementById("bg").style.backgroundImage ="url("+img5+")";
  document.getElementById("sty").style.backgroundColor=col5;
}
else {
  document.getElementById("bg").style.backgroundImage ="url("+img6+")";
  document.getElementById("sty").style.backgroundColor=col6;
}

//screen shot

$(document).ready(function(){

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
});


  $('#tab-3').on('click',function(){
    $('.sty').toggleClass("bord");
    });


$("#down").click(function() {
  var node = document.getElementById("bg") 

  const params = {
    pixelRatio: 2,
    quality: 1.0
}
  htmlToImage.toJpeg(node, params)
  .then(function (dataUrl) {
    var link = document.createElement('a');
    var element = document.getElementById("view");
    link.appendChild(element);
    link.download = 'happy-brith.jpeg';
    link.href = dataUrl;
    link.click();
  })
  
  .catch(function (error) {
    // console.error('oops, something went wrong!', error);
  });
 
});



})


