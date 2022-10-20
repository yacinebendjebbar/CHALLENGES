 // TODO: Add code to check answers to questions

 document.addEventListener("DOMContentLoaded",function(){
     

    document.querySelector("#check").addEventListener("click", function(){
    
        let input =document.querySelector("#usrn");
        var usrnm = /^[a-z0-9_.]+$/;
        if (input.value.match(usrnm))
            {
                input.style.borderColor="green";
            }
        else
            {
                input.style.borderColor="red";
                document.querySelector("#answercheck1").innerHTML="Please enter a username";

            }
            
        input = document.querySelector("#email");
        var em = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        
        if (input.value.match(em))
            {
                input.style.borderColor="green";

            }
        else
            {
                input.style.borderColor="red";
                document.querySelector("#answercheck2").innerHTML="Do not forget the '@'";
            }
            
        input = document.querySelector("#pass");
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
        
        
        if (input.value.match(passw))
            {
                input.style.borderColor="green";
            }
        else
            {
                input.style.borderColor="red";
                document.querySelector("#answercheck3").innerHTML="Password must be between 6-15 with special "+"<br>"+"characters(at least :1 cap , 1 min ,1 special char)";
            }
    })

});