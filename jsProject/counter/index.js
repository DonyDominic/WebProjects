val = document.getElementById("val");
let current_num = 0;
btn_dec = document.getElementById("dec");
btn_inc = document.getElementById("inc");
btn_res = document.getElementById("res");
btn_dec.addEventListener("click", () => {
  current_num--;
  val.innerText = current_num;
  chk_color(current_num)

});
btn_inc.addEventListener("click", () => {
  current_num++;
  val.innerText = current_num;
  chk_color(current_num)
});

btn_res.addEventListener("click", () => {
  current_num = 0;
  val.innerText = current_num;
  chk_color(current_num)


});

function chk_color(num) {
    if (num > 0) {
      val.style.color = "green";
    }
    else if (num<0) {
      val.style.color = "red";
        
    }
    else{
      val.style.color = "black";

    }
  }
