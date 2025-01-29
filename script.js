let flag = true
let hidden_content = document.getElementById("hidden")
let arrow = document.getElementById("shevron")

document.getElementById("toggle").addEventListener("click", ()=>{
    
    if (flag) {hidden_content.style.display = "flex"; flag = false;  arrow.style.transform = "rotate(180deg)";}
    else {hidden_content.style.display = "none"; flag = true; arrow.style.transform = "rotate(0deg)";}
    
})



let acc = document.getElementsByClassName("accordion");


for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
