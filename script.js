function stop() {
    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.pause();
    audio6.currentTime = 0;
    audio6.pause();
    audio7.currentTime = 0;
    audio7.pause();
    audio8.currentTime = 0;
    audio8.pause();
    audio9.currentTime = 0;
    audio9.pause();
    audio10.currentTime = 0;
    audio10.pause();
    audio11.currentTime = 0;
    audio11.pause();
    audio12.currentTime = 0;
    audio12.pause();
    audio13.currentTime = 0;
    audio13.pause();
    audio14.currentTime = 0;
    audio14.pause();
    audio15.currentTime = 0;
    audio15.pause();
    audio16.currentTime = 0;
    audio16.pause();
    audio17.currentTime = 0;
    audio17.pause();
    audio18.currentTime = 0;
    audio18.pause();
    audio19.currentTime = 0;
    audio19.pause();
   
    }

function randomStock () {
    var myrandom=Math.round(Math.random()*19)

    if (myrandom==0){
        stop();
        let audio = document.getElementById("audio0");
         audio0.play();
        document.getElementById("stockpic").src ="assets/skip.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN"
    }
    
    else if (myrandom==1){
        stop();
        let audio1 = document.getElementById("audio1");
         audio1.play();
        document.getElementById("stockpic").src = "assets/abnb.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }
    else if (myrandom==2){
        stop();
        let audio2 = document.getElementById("audio2");
         audio2.play();
        document.getElementById("stockpic").src ="assets/amc.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }
    else if (myrandom==3){
        stop();
        let audio3 = document.getElementById("audio3");
         audio3.play();
        document.getElementById("stockpic").src ="assets/amd.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }
    else if (myrandom==4){
        stop();
        let audio4 = document.getElementById("audio4");
         audio4.play();
        document.getElementById("stockpic").src ="assets/amzn.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }
    else if (myrandom==5){
        stop();
        let audio5 = document.getElementById("audio5");
         audio5.play();
        document.getElementById("stockpic").src ="assets/appl.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }
    else if (myrandom==6){
        stop();
        let audio6 = document.getElementById("audio6");
         audio6.play();
        document.getElementById("stockpic").src ="assets/baba.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }
    else if (myrandom==7){
        stop();
        let audio7 = document.getElementById("audio7");
         audio7.play();
        document.getElementById("stockpic").src ="assets/crm.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }
    else if (myrandom==8){
        stop();
        let audio8 = document.getElementById("audio8");
         audio8.play();
        document.getElementById("stockpic").src ="assets/crsp.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN"
    }
    else if (myrandom==9){
        stop();
        let audio9 = document.getElementById("audio9");
         audio9.play();
        document.getElementById("stockpic").src ="assets/fb.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }
    else if (myrandom==10){
        stop();
        let audio10 = document.getElementById("audio10");
         audio10.play();
        document.getElementById("stockpic").src ="assets/gme.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }
    else if (myrandom==11){
        stop();
        let audio11 = document.getElementById("audio11");
         audio11.play();
        document.getElementById("stockpic").src = "assets/googl.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }
    else if (myrandom==12){
        stop();
        let audio12 = document.getElementById("audio12");
         audio12.play();
        document.getElementById("stockpic").src = "assets/hood.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }
    else if (myrandom==13){
        stop();
        let audio13 = document.getElementById("audio13");
         audio13.play();
        document.getElementById("stockpic").src = "assets/mrna.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }
    else if (myrandom==14){
        stop();
        let audio14 = document.getElementById("audio14");
         audio14.play();
        document.getElementById("stockpic").src = "assets/msft.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }
    else if (myrandom==15){
        stop();
        let audio15 = document.getElementById("audio15");
         audio15.play();
        document.getElementById("stockpic").src = "assets/nflx.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }
    else if (myrandom==16){
        stop();
        let audio16 = document.getElementById("audio16");
         audio16.play();
        document.getElementById("stockpic").src = "assets/sq.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }
    else if (myrandom==17){
        stop();
        let audio17 = document.getElementById("audio17");
         audio17.play();
        document.getElementById("stockpic").src = "assets/tdoc.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }
    else if (myrandom==18){
        stop();
        let audio18 = document.getElementById("audio18");
         audio18.play();
        document.getElementById("stockpic").src = "assets/tsla.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }
    else if (myrandom==19){
        stop();
        let audio19 = document.getElementById("audio19");
         audio19.play();
        document.getElementById("stockpic").src = "assets/stockuber.jpg";
        document.getElementById("stockbutton").innerHTML = "AGAIN";
    }


}