var btn=document.querySelector(".agreement .select-box");
console.log(btn);
var a=0;
btn.onclick=function(){
    a++;
    if(a==2){
        a=0
    }
    console.log(a);
    if(a==1){
        this.style.background = "transparent";
    }else if(a==0){
        this.style.background = "url('img/commonbg.png') -5px -65px no-repeat #E63D59";
        this.style.backgroundSize = "250px 250px";
    }
    
}

var login1=document.querySelectorAll(".text>div");
console.log(login1);
var message1=document.querySelectorAll(".banner .message a");
console.log(message1);
for(var i=0;i<message1.length;i++){
    message1[i].index=i;
    message1[i].onclick=function(){
        for(var i=0;i<login1.length;i++){
            message1[i].setAttribute("class","");
            login1[i].setAttribute("class","disappear");
        }
            message1[this.index].setAttribute("class","color");
            login1[this.index].setAttribute("class","appear");
    }
    
}