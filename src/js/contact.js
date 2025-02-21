
const openBar = document.getElementById("open")
const closeBar = document.getElementById("close")
const navItems =document.getElementById("navitems")

openBar.addEventListener("click", () => {
  navItems.style.display = "block"
  openBar.style.display = "none"
  closeBar.style.display = "flex"
})

closeBar.addEventListener("click", () => {
  navItems.style.display = "none"
  closeBar.style.display = "none"
  openBar.style.display = "flex"
})