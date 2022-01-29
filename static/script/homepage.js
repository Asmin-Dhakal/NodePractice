
addEventListener("click",function(event){
 event.preventDefault()
});


const printid=()=>{
     var usern=document.getElementById('uname').value
     var pass=document.getElementById('passw').value
     checkLength(pass, usern)
     
    
}

function sendid(){
    var sendid = localStorage.getItem('lstoruname');
    document.getElementById("unameprint").innerText = sendid
    console.log(sendid)
    return sendid;
}

function checkLength(pass, usern) {
    if (pass.length < 6) {
      alert("length must be more then 6 characters")
    }
    else{
        
            localStorage.setItem("lstoruname", usern);
            console.log('iamcalled')




            const fetchOptions = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({usern , pass }),
              };
              fetch('/user',fetchOptions)


              
            window.location.href ="../html/homepage.html"
       }
    }

function chests(){

        window.location.href="../html/chest.html"
    }


   

