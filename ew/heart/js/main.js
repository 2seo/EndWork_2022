var color = document.getElementById("back");

var num = 1;
var code = ["#ffc0cb", "#afeeee",  "#D3F6CE","#DDB0E6", "#FFED9D" ];

color.addEventListener('click',function() {
          color.style.background = code[num];
          num ++;

          if(num == 5){
                    num=0;
          }
});