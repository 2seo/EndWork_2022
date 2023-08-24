const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");

let i = 0;
let oldnum = 0;
let newnum=1;

window.onload = function(){
          randomgoose();
};
var roll = document.getElementById("wrap");

function randomgoose(){
          newnum=Math.floor(Math.random()*4);
          if(oldnum==newnum){
                    newnum=Math.floor(Math.random()*4);
                    if(oldnum==newnum){
                              newnum=Math.floor(Math.random()*4);
                    }
          }
          console.log(newnum);
          for(let el of lists){
                    if(i==newnum){
                              el.style.backgroundImage='url(img/goose1.png)';
                    }
                    else{
                              el.style.backgroundImage='url(img/blank.png)';
                    }
                    i++;
                    if(i>3){i=0;}
          }
          oldnum=newnum;
}

roll.addEventListener('click',function() {
          for(let el of lists){
                    if(i==newnum){
                              el.style.backgroundImage='url(img/goose2.png)';
                    }
                    i++
                    if(i>3){i=0;}
          }
          setTimeout(randomgoose, 500);
});