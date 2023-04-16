
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
  var suc1="<div id='num'>1</div>Let the journey of your destiny be a journey with God.<br/> One thing you must do is to hear and fear God.<br/> That way, you can follow His plan <br/> and map for your life & enjoy<br/>His abundant grace."
  var suc2="<div id='num'>2</div>The exam will test your knowledge, not your skill.<br/> Never scare of exams have confidence in your self,<br/> nothing can stop you or <br/> obstruct your way best of luck for your exams."
  var suc3="<div id='num'>3</div> “Only Buses Will Stop Here, <br/>not your Time.. So Keep Walking Towards your Goal”.<br/> Sometimes we need to fail in order to know,<br/> Sometimes we need to be hurt in order to grow,<br/> Sometimes we need to lose in order <br/>to gain Cause some life lessons are best learned<br/> through pain."
  var suc4="<div id='num'>4</div>U're 2 blessed <br/>2 b stressed 2 loaded<br/> 2 be folded 2 pretty<br/> 2 b pitied 2 required<br/> 2 b fired In fact,<br/> u're 2 sweet… Stay cool."
  var suc5="<div id='num'>5</div>As d sky breaks into a beautiful dawn,<br/> may God open the windows of heaven<br/> to shower you with lots of love and happiness<br/> To make your day a very nice one.<br/> Good day." 
  var suc6="<div id='num'>6</div>It is just anther exam and you are going<br/> to score amazingly in this as well,<br/> Have confidence in yourself and rock the show,<br/> You have studied really hard so be confident and <br/> do well in your exam.<br/>Good luck."

  var sucs =[suc1, suc2, suc3, suc4 ,suc5 ,suc6],
  index=0;
  document.getElementById("dat").onclick=function(){
    document.getElementById("data").innerHTML=sucs[index];
    index=(index+1)% sucs.length;
  }
  //image
  var img1="js/sty/s1.png";
  var img2="js/sty/s2.png";
  var img3="js/sty/s3.png";
  var img4="js/sty/s4.png";
  var img5="js/sty/s5.png";
  var img6="js/sty/s6.png";
  var img7="js/sty/s7.png";
  var img8="js/sty/s8.png";
  var img9="js/sty/s9.png";
  
  var img =[img1, img2, img3, img4, img5, img6, img7, img8, img9],
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
   document.getElementById("styx").innerHTML=suc1;  
  // console.log("mwana wa kikuba")
}
else if(con=="2"){
   document.getElementById("styx").innerHTML=suc2;
  // console.log("mwana")
}
else if(con=="3"){
   document.getElementById("styx").innerHTML=suc3;
  // console.log("yes all")
}
else if(con=="4"){
   document.getElementById("styx").innerHTML=suc4;
  // console.log("best")
}
else if(con=="5"){
   document.getElementById("styx").innerHTML=suc5;
  // console.log("yes")
}
else if(con=="6"){
  document.getElementById("styx").innerHTML=suc6;
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
   return encodeURI("whatsapp://send?text= check out your success gift from: " +nam1 +" " + ur+"?snam="+nam1+"%26rnam="+nam2+"%26con="+dets);
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

var random =Math.floor(Math.random()*9)+1
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
}
else if(random==5){
  document.getElementById("bg").style.backgroundImage ="url("+img5+")";
  document.getElementById("sty").style.backgroundColor=col5;
}
else if(random==6){
  document.getElementById("bg").style.backgroundImage ="url("+img6+")";
  document.getElementById("sty").style.backgroundColor=col6;
}
else if(random==7){
  document.getElementById("bg").style.backgroundImage ="url("+img7+")";
  document.getElementById("sty").style.backgroundColor=col7;
}
else if(random==8){
  document.getElementById("bg").style.backgroundImage ="url("+img8+")";
  document.getElementById("sty").style.backgroundColor=col8;
}
else {
  document.getElementById("bg").style.backgroundImage ="url("+img9+")";
  document.getElementById("sty").style.backgroundColor=col3;
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
    link.download = 'success.jpeg';
    link.href = dataUrl;
    link.click();
  })
  
  .catch(function (error) {
    console.error('oops, something went wrong!', error);
  });
 
});



})


