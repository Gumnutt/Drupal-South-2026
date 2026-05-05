import { navigate } from "astro:transitions/client"
const totalSlides = Object.keys(import.meta.glob("../../slides/*.mdx")).length

function getCurrentRoute() {
  const pathname = window.location.pathname
  console.log("Current pathname:", pathname)
  if (pathname === "/" || pathname === "") return "root"
  if (pathname === "/about") return "about"
  return parseInt(pathname.split("/")[1]) || null
}

function goNext() {
  const route = getCurrentRoute()
  if (route === "root") navigate("/about")
  else if (route === "about") navigate("/1")
  else if (typeof route === "number" && route < totalSlides) navigate("/" + (route + 1))
}

function goPrev() {
  const route = getCurrentRoute()
  console.log("Current route:", route)
  if (route === "about") navigation.back()
  else if (route === 1) navigate("/about")
  else if (typeof route === "number" && route > 1) navigation.back()
}

// Keyboard navigation — registered once, survives page transitions
document.addEventListener("keydown", (e) => {
  // Ignore if user is typing in an input
  if (e.target.closest("input, textarea, [contenteditable]")) return

  switch (e.key) {
    case "ArrowRight":
    case "ArrowDown":
    case " ":
      e.preventDefault()
      goNext()
      break
    case "ArrowLeft":
    case "ArrowUp":
      e.preventDefault()
      goPrev()
      break
  }
})

document.addEventListener("astro:page-load", () => {
  const route = getCurrentRoute()
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")

  const nav = document.querySelector(".navbar")
  const buttons = nav.querySelectorAll("button")

  buttons.forEach((button) => {
    button.addEventListener("click", (ev) => {
      console.log("Button clicked:", ev.target.id)
      if (ev.target.id === "prevBtn") goPrev()
      else goNext()
    })
  })

  prevBtn.style.display = route === "root" ? "none" : ""
  nextBtn.style.display = route === totalSlides ? "none" : ""
})
