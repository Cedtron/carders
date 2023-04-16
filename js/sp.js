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
    // alert("hello dea")
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
 function fon(){
    document.getElementById("sty").style.fontFamily=font[index];
    index=(index+1)% font.length;
  //  alert("hello dea ts worked") 
  }
  
// console.log( fon)
  //whats app link button
  
  
  

  // function input(){
  //   var inp1=document.getElementById('emaix').value
  //   var inp2=document.getElementById('name').value
  //   if(inp1.length=="" || inp2.length==""){
  //     document.getElementById('myBtn').className="btn btn-outline-success disabled" 
  //   }else{
  
  //     document.getElementById('myBtn').className="btn btn-outline-success"
  // }  
  //   }
  

  //screen shot
  
  $(document).ready(function(){
  
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });
  
  
    $('#tab-3').on('click',function(){
      $('.sty').toggleClass("border");
      });

    //   $('#font').on('click',function(){
    //     $("#sty").style.fontFamily=font[index];
    //     index=(index+1)% font.length;
    //     });
    
    //     $('#tab-1').on('click',function(){
    //       $("#sty").style.backgroundColor=col[index];
    // index=(index+1)% col.length;
    //       });
  
  

      var request;
      $("#book").submit(function(event){
          event.preventDefault();
          if (request) {
              request.abort();
          }
          var $form = $(this);
          var $inputs = $form.find("input, select, button, textarea");
          var serializedData = $form.serialize();
      
          if(serializedData.length==""){
            // $(".form__input smp").toggleClass('form-control is-invalid')
            // console.log("please fill in")
          }else{
            // $("#myBtn").show(200)
            // console.log("pass")
          
      
          $inputs.prop("disabled", true);
          request = $.ajax({
              url: "cont.php",
              type: "post",
              data: serializedData,
              success:function(data){
                      // console.log('Upload successfully'+data);
                    document.getElementById("dis").innerHTML=data
                    document.getElementById('book').reset()
                    }
          });
      
          request.done(function (response, textStatus, jqXHR){
              console.log("Hooray, it worked!");
          });
          request.fail(function (jqXHR, textStatus, errorThrown){
              console.error(
                  "The following error occurred: "+
                  textStatus, errorThrown
              );
          });
          request.always(function () {
              $inputs.prop("disabled", false);
          });
        }
      
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
    link.download = 'carders.jpeg';
    link.href = dataUrl;
    link.click();
  })
  
  .catch(function (error) {
    // console.error('oops, something went wrong!', error);
  });
 
});


});