const fs = require("fs");
const exec = require('child_process').exec;

window.onload = function() {                
    console.log("on window loaded!");        
    
    const script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-2.2.4.min.js";    
    script.type = 'text/javascript';         
        
    script.onload = script.onreadystatechange = function() {
        console.log("script loaded!");
        
        if($(".track-list").length){
            console.log("Got content we want!");
            $(".track-list li").each(function(){
                console.log($(this).text());                
            });
            
            console.log("Rebooting tor and refreshing...");
            
            exec("killall -HUP tor", (error, stdout, stderr) => {
                setTimeout(() => location.reload(), 5000);                
            });                        
        }else{            
            console.log("Got a captcha...waiting for input...");        
            $("body").append("<audio id='chome'><source src='http://code.setfive.com/scraper_demo/ding.mp3' type='audio/mpeg'></audio>");            
            $("#chome").get(0).play();
        }
        
    };    
    
    document.body.appendChild(script);    
};
