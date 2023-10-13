const previous_btn = document.getElementById("previousSlide");
const next_btn = document.getElementById("nextSlide");
const child_var = document.querySelector(".presentation .chapter:first-child")
var count_flag = 0;

next_btn.addEventListener("click", (e) => {
  ++count_flag;
  child_var.style.transform = "translateX(" + (-100 * count_flag) + "vw)";
})

previous_btn.addEventListener("click", (e) => {
  if (count_flag != 0) --count_flag;
  child_var.style.transform = "translateX(" + (-100 * count_flag) + "vw)";
})