let changeThemeBtn = document.querySelector(".themeChage")
let body = document.querySelector("body")

changeThemeBtn.addEventListener("click", themeThema)

if (localStorage.getItem("theme") == "dark"){
    changeThemeBtn.classList.add("darkTheme")
    body.classList.add("dark")
}

function themeThema(){
    if(localStorage.getItem("theme") == "dark"){
        changeThemeBtn.classList.remove("darkTheme")
        body.classList.remove("dark")
        localStorage.setItem("theme", "white")
    }
    else{
        changeThemeBtn.classList.add("darkTheme")
        body.classList.add("dark")
        localStorage.setItem("theme", "dark")  
    }
    // changeThemeBtn.classList.toggle('darkTheme')
    // body.classList.toggle("dark")
}
let searchBtn = document.querySelector(".search button")
searchBtn.addEventListener("click", searchMovie)

let loader = document.querySelector('.loader')
document.addEventListener('keydown')
function searchMovie() {
    loader.style.diplay = "blok"

    let searchText = document.querySelector(".search input").value
    console.log(searchText)
}