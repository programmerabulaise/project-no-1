
$(document).ready(function(){
  
    // log in functiosn

     $("#loginform").fadeOut();

     $("#log-inid").click(function(){
        $("#loginform").fadeIn();
    });

    $("#login-close").click(function(){
        $("#loginform").fadeOut();
    }); 
 
    // sin up function 

    $("#sinupform").fadeOut();

    $("#sin-up").click(function(){
        $("#sinupform").fadeIn();
    });

    $("#form-close").click(function(){
        $("#sinupform").fadeOut();
    }); 
 
    $("#user-fname").hide();
    $("#user-lname").hide();
     $("#user-password").hide();




    // user log in here

    $("#log-in").click(function(){
         
        var usernameval = $("#username").val();
        var loguservpass = $("#loguserpassword").val();

        if( usernameval.length == ""){
            $("#logusername").html("*please enter your username");
            $("#logusername").focus();
            $("#logusername").css("color","red");
            return false;
        }else if(usernameval.length < 7){
            $("#logusername").html("*username must be  7");
            $("#logusername").focus();
            $("#logusername").css("color","red");
            return false;

        }else if(loguservpass.length == ""){
            $("#logpassword").html("password must be 7 charcter");
            $("#logpassword").focus();
            $("#logpassword").css("color","red");
            return false;

        } else if(loguservpass.length =""){
            $("#logpassword").html("enter your password");
            $("#logpassword").focus();
            $("#logpassword").css("color","red");
            return false;

        } else if(loguservpass.length <3){
            $("#logpassword").html("password length must be 3");
            $("#logpassword").focus();
            $("#logpassword").css("color","red");
            return false;

        } else if(loguservpass.length >10){
            $("#logpassword").html("password length must be less than 10 charcter");
            $("#logpassword").focus();
            $("#logpassword").css("color","red");
            return false;

        }else{
            return true;
        }




    });

    // user registion here

     $("#sinupbtn").click(function(){

         
         
          var fnameval = $("#userfname").val();
          var lnameval = $("#userlname").val();
          var userpasswordval = $("#userpassword").val();
           
          // fname validation start here
           
          if(fnameval.length == ""){ 
               
            $("#fname").html("* please fil name");
            $("#fname").focus();
            $("#fname").css("color","red");
            return false;
          }else if (fnameval.length < 3){
            
            $("#fname").html("*fname must be at lest 3 ");
            $("#fname").focus();
            $("#fname").css("color","red");
            return false;
          }else if( fnameval.length >  10){

            $("#fname").html("* fname must be less than 10");
            $("#fname").focus();
            $("#fname").css("color","red");
            return false;

          }else if(lnameval.length == ""){  // lname validation here
               
            $("#lname").html("* please fil lname");
            $("#lname").focus();
            $("#lname").css("color","red");
            return false;
          }else if (lnameval.length < 3){
            
            $("#lname").html("*lname must be at lest 3 ");
            $("#lname").focus();
            $("#lname").css("color","red");
            return false;
          }else if( lnameval.length >  10){

            $("#lname").html("* lname must be less than 10");
            $("#lname").focus();
            $("#lname").css("color","red");
            return false;
          }if(userpasswordval.length == ""){  // password validation here
               
            $("#password").html("* please fil password");
            $("#password").focus();
            $("#password").css("color","red");
            return false;
          }else if (userpasswordval.length < 3){
            
            $("#password").html("*password must be at lest 3 ");
            $("#password").focus();
            $("#password").css("color","red");
            return false;
          }else if( userpasswordval.length >  10){

            $("#password").html("* password must be less than 10");
            $("#password").focus();
            $("#password").css("color","red");
            return false;
          }else{
              return true;
          }
          
             
            
         });




  });



 
 