
document.addEventListener("DOMContentLoaded", function () {
  // ...existing code...
let obj={
 1: "red",
 2: "blue",
 3: "green",
 4: "pink",
 5:  "grey",
 6: "purple"
}

document.getElementById("clickk").onclick=function(){


    let box = document.getElementsByClassName("box");
   
for (let index = 0; index < box.length; index++) {
   let randomColor= obj[Math.floor(Math.random()*6)+1];
    box[index].style.backgroundColor=randomColor;
     
    
}
}
document.getElementById("zero").onclick=function(){
    let box = document.getElementsByClassName("box");
   
for (let index = 0; index < box.length; index++) {
  
    box[index].style.backgroundColor="White";
}

}



});