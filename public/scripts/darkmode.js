// Dark Mode
const html = document.querySelector('html')
// const asd = document.querySelector(".bg")
const checkbox = document.querySelector('.switch input')
const rocketLogo = document.querySelector('.rocket-logo')
const darkModeText = document.querySelector('#dark-mode-text')
var darkMode = false;

checkDarkMode()

checkbox.addEventListener('change', function() {
    checkDarkMode()
    // html.classList.toggle('dark')
})

function checkDarkMode(){
    darkMode = checkbox.checked 
    console.log('darkmode: ' + darkMode)
    
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