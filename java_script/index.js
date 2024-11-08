let btn = document.getElementById("light_dark");
let sec2a = document.getElementById("section2a");
let text_2a = document.getElementById("left_text_2a");
let sec2c = document.getElementById("section2c");
let text_2c = document.getElementById("gallery_info_2c");

let cur_color = "light";
btn.addEventListener("click", () => {
  if (cur_color === "light") {
    cur_color = "dark";
    btn.innerHTML = "D";
    btn.style.backgroundColor = "#222831";
    btn.style.color = "#eeeeee";
    sec2a.style.backgroundColor = "#222831";
    text_2a.style.color = "#eeeeee";
    sec2c.style.backgroundColor = "#222831";
    text_2c.style.color = "#eeeeee";
  } else {
    cur_color = "light";
    btn.innerHTML = "L";
    btn.style.backgroundColor = "#eeeeee";
    btn.style.color = "#222831";
    sec2a.style.backgroundColor = "#eeeeee";
    text_2a.style.color = "#222831";
    sec2c.style.backgroundColor = "#eeeeee";
    text_2c.style.color = "#222831";
  }
});
