const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const deg = 30;
const len = lists.lenght-1;
let i = 0;
let num = 0;
let active = 0;
function activation(index, lists){
          for(let el of lists){
                    el.classList.remove("on");
          }
          lists[index].classList.add("on");
}
for(let el of lists) {
          el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
          i++;
}
for(let el of lists) {
          let pic = el.querySelector(".pic");
          el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
          pic.style.backgroundImage = `url(img/floppy${i%4}.png)`;
          i++;
}
prev.addEventListener("click", ()=>{
          num++;
          frame.style.transform = `rotate(${deg*num}deg)`;

          (active == 0 ) ? active=11 : active--;
          activation(active, lists);
});
next.addEventListener("click", ()=>{
          num--;
          frame.style.transform = `rotate(${deg*num}deg)`;

          (active == 11 ) ? active=0 : active++;
          activation(active, lists);
});