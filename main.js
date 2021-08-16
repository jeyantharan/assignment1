$(document).ready(function(){
    $("#img").click(function(){
        alert("Password should contain\n *At least one capital case.\n *At least one simple case \n *More than 8 characters long \n *One number\n *One symbol");
    });
    $("#succ").hide();
    $("#succ-error").hide();
    $("#button1").on("click", function(){
        var add = $("#addinfo").val();
        var addformat =/^(?![0-9._])(?!.*[0-9._]$)(?!.*\d_)(?!.*_\d)[a-zA-Z0-9_]+$/;
        if(addformat.test(add)){
            $("#succ").show();
            $("#succ-error").hide();
        }else{
           $("#succ").hide();
           $("#succ-error").show();
        }
    });
    
});

function add(){
    var add = document.getElementById('addinfo').value;
    if(add===""){
        document.getElementById("succ").innerHTML="";
    }else{
        document.getElementById("succ").innerHTML=add + " show added successfully!";
    }
};

