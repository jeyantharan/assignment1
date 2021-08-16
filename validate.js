//login form validation
$(document).ready(function(){
    $("#email").focus(function(){
        $("#error-email").hide();
       
    });
    $(document).on("focusout", "#email", function(){
        var email = $(this).val();
        if(email === ""){
            $("#error-email").show();
        }
    });
    $("#password").focus(function(){
        $("#error-password").hide();
    });
    $(document).on("focusout", "#password", function(){
        var email = $(this).val();
        if(email === ""){
            $("#error-password").show();
        }
    });
    $("#user").focus(function(){
        $("#error-user").hide();
    });
    $(document).on("focusout", "#user", function(){
        var email = $(this).val();
        if(email === ""){
            $("#error-user").show();
        }
    });
    $("#invalid-name").hide();
    $("#invalid-email").hide();
    $("#invalid-pass").hide();
    $(document).on("keyup", "#user", function(){
        var user = $(this).val();
        var userformat =/^(?![0-9._])(?!.*[0-9._]$)(?!.*\d_)(?!.*_\d)[a-zA-Z0-9_]+$/;
        if(userformat.test(user)){
            $("#invalid-name").hide();
        }else{
            $("#invalid-name").show();
        }
    });

    $(document).on("keyup", "#email", function(){
        var ema = $(this).val();
        var mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(mailformat.test(ema)){
            $("#invalid-email").hide();
        }else{
            $("#invalid-email").show();
        }
    });
    $(document).on("keyup", "#password", function(){
        var pass = $(this).val();
        var passformat =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if(passformat.test(pass)){
            $("#invalid-pass").hide();
        }else{
            $("#invalid-pass").show();
        }
    });
    
    
});

