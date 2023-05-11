let click = document.getElementById('skeuomorphic');

function changeMode() {
    let body = document.body;
    
    // toggle the theme
    body.classList.toggle("dark-theme");
    
    // change the button text
    if (click.innerHTML === "Dark Mode") {
       click.innerHTML = "Normal Mode";
    } else {
       click.innerHTML = "Dark Mode"
    }
 }

click.addEventListener("click", changeMode)
  
