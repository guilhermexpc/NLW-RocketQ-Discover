// Dark Mode
const html = document.querySelector('html')
// const asd = document.querySelector(".bg")
const checkbox = document.querySelector('.switch input')
const rocketLogo = document.querySelector('.rocket-logo')
const darkModeText = document.querySelector('#dark-mode-text')
var darkMode = false;

checkDarkMode()
if (checkbox)
{
    checkbox.addEventListener('change', function() {
        ativarDarkMode()
        // html.classList.toggle('dark')
    })
    
}

function ativarDarkMode(){
    darkMode = checkbox.checked 
    console.log('darkmode: ' + darkMode)
    localStorage.setItem('darkmode', darkMode ? "on" :  "off")

    if (darkMode)
    {
        html.classList.add("dark")
        rocketLogo.src = "/images/logo-dark.png"        
    }
    else{
        html.classList.remove("dark")
        rocketLogo.src = "/images/logo.svg"              
    }
}

function checkDarkMode(){
    darkMode = localStorage.getItem('darkmode')
    console.log('checkDarkMode: ' + darkMode)    
    
    if (darkMode == "on")
    {
        if (checkbox)
            checkbox.checked = true
        html.classList.add("dark")
        rocketLogo.src = "/images/logo-dark.png"        
    }
    else{
        if (checkbox)
            checkbox.checked = false
        html.classList.remove("dark")
        rocketLogo.src = "/images/logo.svg"              
    }
}