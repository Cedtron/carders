

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
  // store
  //  var username=localStorage.getItem('nam1')
  //   var password=localStorage.getItem('nam2')
   
  // let
  var love1="<div id='num'>1</div>A little music can make one dance<br/>A little hug can make one happy<br/> Words begin with ABC. <br/>Numbers begin with 123. <br/>Music begins with do, re, mi.<br/>And Love begins with you and me!"
  var love2="<div id='num'>2</div>Some pics are kept in albums others in the heart <br/>those in albums are often remembered when seen those in the heart<br/> are never forgotten As long as the heart beats,<br/> You can never be forgotten."
  var love3="<div id='num'>3</div> I have liked many. <br/>Loved very few.<br/>Yet no-one has been as sweet as you.<br/> I'd stand & wait in the world’s longest queue,<br/> Just for the pleasure of a moment with you."
  var love4="<div id='num'>4</div>I know that they say absence makes the heart grow fonder.<br/> I go to bed with tears every night<br/> waiting for the moment I can hear from you.<br/> I don't know this feeling I have never experienced it.<br/> I want you by my side."
  var love5="<div id='num'>5</div>I'm afraid to close my eyes because I might think of you.<br/> I'm afraid to open them because I might see you.<br/> I'm afraid to move my lips because I might speak of you.<br/> I'm afraid to listen because<br/> I might hear my heart fall for you.<br/> I love you.";
  var love6="<div id='num'>6</div> I asked God for a rose and<br/> He gave me a garden.<br/> I asked God for a drop of water and<br/>He gave me an ocean. <br/>I asked God for an angel and <br/>He gave me you! <br/>Isn't He wonderful?"
  var loves =[love1, love2, love3, love4 ,love5 ,love6],
  index=0;
  document.getElementById("dat").onclick=function(){
    document.getElementById("data").innerHTML=loves[index];
    index=(index+1)% loves.length;
  }
  //image
  var img1="js/sty/l6.png";
  var img2="js/sty/l2.png";
  var img3="js/sty/l3.png";
  var img4="js/sty/l4.png";
  var img5="js/sty/l5.png";
  var img5="js/sty/l1.png";
  
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
   document.getElementById("styx").innerHTML=love1;  
  // console.log("mwana wa kikuba")
}
else if(con=="2"){
   document.getElementById("styx").innerHTML=love2;
  // console.log("mwana")
}
else if(con=="3"){
   document.getElementById("styx").innerHTML=love3;
  // console.log("yes all")
}
else if(con=="4"){
   document.getElementById("styx").innerHTML=love4;
  // console.log("best")
}
else if(con=="5"){
   document.getElementById("styx").innerHTML=love5;
  // console.log("yes")
}
else if(con=="6"){
  document.getElementById("styx").innerHTML=love6;
 // console.log("yes")
}
else{
  document.getElementById("styx").innerHTML="";
}

// console.log(`hey ${sname} and this is ${rname} and ${con}`)


var main=document.getElementById('data').textContent;
var stx=document.getElementById('styx').textContent;
if (stx===""){
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
   return encodeURI("whatsapp://send?text= check out your love gift from: " +nam1 +" " + ur+"?snam="+nam1+"%26&rnam="+nam2+"%26&con="+dets);
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
    link.download = 'love.jpeg';
    link.href = dataUrl;
    link.click();
  })
  
  .catch(function (error) {
    // console.error('oops, something went wrong!', error);
  });
 
});




})


