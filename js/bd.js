// var htmlToImage = require('./html-to-image/dist/');



$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".lds-ripple").fadeOut();
	$(".loadx").delay(800).fadeOut("slow");

});

  function addx(){ 
  var nm2=document.getElementById("rece").value;
        document.getElementById("name").innerHTML=nm2;
        document.getElementById("rnam").innerHTML="";
        return nm2
  }
  function add(){
    var nm1= document.getElementById("sender").value;
    document.getElementById("las").innerHTML=nm1;
    document.getElementById("snam").innerHTML="";
    return nm1
}


 
// let
var bd1="<div id='num'>1</div>Friendship is about bringing out the positive<br/> when everything seems negative,<br/> being accepted for who you are,<br/> being able to pick up right where you left off,<br/> sharing, talking, and laughing. <br/>Friendship is about us, and for that I'm grateful.<br/> And I hope you have the best birthday ever.";
var bd2="<div id='num'>2</div>Each moment of life is precious <br/>hope you get lots of memorable moments this year.<br/>Happy birthday my dear friend.";
var bd3="<div id='num'>3</div>Friends like you are rear to find.<br/>You have always stood besides me in think and<br/>thin and shared my joys like they were<br/>yours Wishing a very<br/>happy birthday to a true friend.";
var bd4="<div id='num'>4</div>I want to celebrate many more birthdays with you.<br/>May your life he filled with lots of happiness<br/>happy birthday."
var bd5="<div id='num'>5</div>We have spent so many days together <br/>we have seen numerous dreams together<br/>May we keep doing the same till our last breath together.<br/>Happy Birthday friend."

var bds =[bd1, bd2, bd3, bd4 ,bd5],
index=0;
document.getElementById("dat").onclick=function(){
  document.getElementById("data").innerHTML=bds[index];
  index=(index+1)% bds.length;
}

//image
var img1="js/sty/Uni.png";
var img2="js/sty/bwa.png";
var img3="js/sty/bd3.png";
var img4="js/sty/bd5.png";
var img5="js/sty/best.png";


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
let queryString =window.location.search

var urls=new Array(3)
var mapObj = {
  '%26':',',
   '=':','
};
queryString  = queryString .replace(/%26|=/gi, function(matched){
  return mapObj[matched];
});
const query=queryString.replace('?','')
const querys=query.replace("con:'",'con:').split(",")

// console.log(querys)

var sname= querys[1];
var rname= querys[3];
var con= querys[5]
// console.log(sname)
document.getElementById("snam").innerHTML=sname;
document.getElementById("rnam").innerHTML=rname;

// conduction out
if (con=="1"){
   document.getElementById("styx").innerHTML=bd1;  
  // console.log("mwana wa kikuba")
}
else if(con=="2"){
   document.getElementById("styx").innerHTML=bd2;
  // console.log("mwana")
}
else if(con=="3"){
   document.getElementById("styx").innerHTML=bd3;
  // console.log("yes all")
}
else if(con=="4"){
   document.getElementById("styx").innerHTML=bd4;
  // console.log("best")
}
else if(con=="5"){
   document.getElementById("styx").innerHTML=bd5;
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
   return encodeURI("whatsapp://send?text= check out your birthday gift from: " +nam1 +" " + ur+"?snam="+`${nam1}`+"%26rnam="+`${nam2}`+"%26con="+dets);

  }

// url
function ural(){
  var nam1= document.getElementById("sender").value;
  var nam2=document.getElementById("rece").value;
   var dets=document.getElementById("num").textContent;
  var ur='http://' + window.location.hostname + window.location.pathname
  console.log( ur+"?snam="+nam1+"&rnam="+nam2+"&con="+dets);
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
}else {
  document.getElementById("bg").style.backgroundImage ="url("+img5+")";
  document.getElementById("sty").style.backgroundColor=col5;
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


