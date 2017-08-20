
  $("#loginpage").hide();
 $("#signup").css({"color":"#0059b3", "border-bottom":"2px solid #0059b3","padding":"9px" , "font-size-adjust":"558"});
 $("#signuppage").show();
 $("#login").css({"color":"black", "border-bottom":"none","padding":"9px" });
  
  $("#login").click(
   function(){
   $("#signup").css({"color":"black", "border-bottom":"none",});
   $("#loginpage").show();
    $("#signuppage").hide();
    $("#login").css({"color":"#0059b3", "border-bottom":"2px solid #0059b3","padding":"9px"});
   
   }
); 

 $("#signup").click(
  function(){
    $("#login").css({"color":"black", "border-bottom":"none","padding":"9px" });
   $("#loginpage").hide();
   $("#signup").css({"color":"#0059b3", "border-bottom":"2px solid #0059b3","padding":"9px"});
   $("#signuppage").show();
  }
);
 /*............firebase......................*/
var maintext=document.getElementById("maintext");
var submitbtn=document.getElementById("submitbtn");
var passtext=document.getElementById("passtext");
var firsttext=document.getElementById("firsttext");

      
      
      $("#submitbtn").click(
      function(){
   
     
  var passmsgtext=passtext.value;
  var msgtext= maintext.value;
  var firstmsgtext=firsttext.value;
  var validEmail= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
if(msgtext == "" && passmsgtext == "" && firstmsgtext == ""){
      $("#signupError").show().text("Please! enter a your email , username and password");
      }
      else if (firstmsgtext == ""){
      $("#signupError").show().text("Please! enter a your name");
      }
      else  if(msgtext == ""){
      $("#signupError").show().text("Please! enter a your email address");
      }
      else if(validEmail.test(msgtext)== false ){
      $("#signupError").show().text("Please! enter your valid email address");
      }
      else if(passmsgtext == ""){
      $("#signupError").show().text("Please! enter your password"); 
      }
     else {if( msgtext != "" && passmsgtext != "") {
  
  firebase.auth().createUserWithEmailAndPassword(msgtext, passmsgtext)
  .then(function() {
    // Sign-out successful.
    $("#success").show();
    $("#signupError").hide();
    }).catch(function (error) {
  // Handle Errors here.
    $("#signupError").show().text(error.message);
  });
}}
});


  $("#loginBtn").click( 
  function(){
  
  
         var email= $("#loginEmail").val();
      var password = $("#loginPassword").val();
      
       if(email == "" && password == ""){
       $("#loginError").show().text("Please! enter a valid email and password");
       }
       else  if(email == ""){
       $("#loginError").show().text("Please! enter a valid email address");
       }
       else if(password == ""){
       $("#loginError").show().text("Please! enter your password"); 
       }
      else {if(email != "" && password != "") {
          firebase.auth().signInWithEmailAndPassword(email, password)
          .catch(function (error) {
          // Handle Errors here.
          $("#loginError").show().text(error.message);
        
          })
          .then(function(user) {
          if (user) {
          // User is signed in.
          
          $(".login-cover").hide();
          
        
          
          
          } else {
          // No user is signed in.
          
          $(".login-cover").show();
          
          }
          });

         
      }
      }
      
         
      }
  );
  $(".signoutbtn").click(
  function(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  $(".login-cover").show();
  }).catch(function(error) {
  // An error happened.
  window.alert(error.message);
  });
  }
  );
  
        // Get the modal
         var modal = document.getElementById('myModal');
         
         // Get the button that opens the modal
         var btn = document.getElementById("loginBtn");
         
         // Get the <span> element that closes the modal
         var span = document.getElementsByClassName("close")[0];
         
         // When the user clicks on the button, open the modal 
         btn.onclick = function() {
         modal.style.display = "block";
         }
         
         // When the user clicks on <span> (x), close the modal
         span.onclick = function() {
         modal.style.display = "none";
         }
         
         // When the user clicks anywhere outside of the modal, close it
         window.onclick = function(event) {
         if (event.target == modal) {
         modal.style.display = "none";
         }
         }