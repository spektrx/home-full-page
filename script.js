document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
      accordion.addEventListener("click", function () {
          this.classList.toggle("active");
          const panel = this.nextElementSibling;

          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      });
  });
});


let flag = true
let hidden_content = document.getElementById("hidden")
let arrow = document.getElementById("shevron")

document.getElementById("toggle").addEventListener("click", ()=>{
    
    if (flag) {hidden_content.style.display = "flex"; flag = false;  arrow.style.transform = "rotate(180deg)";}
    else {hidden_content.style.display = "none"; flag = true; arrow.style.transform = "rotate(0deg)";}
    
})
