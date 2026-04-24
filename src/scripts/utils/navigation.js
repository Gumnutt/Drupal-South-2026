import { navigate } from "astro:transitions/client"
const totalSlides = Object.keys(import.meta.glob("../../slides/*.mdx")).length

function getCurrentSlide() {
  return parseInt(window.location.pathname.split("/")[1])
}

function goNext() {
  const current = getCurrentSlide()
  if (current < totalSlides) navigate("/" + (current + 1))
}

function goPrev() {
  const current = getCurrentSlide()
  if (current > 1) navigation.back()
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
  const currentSlide = getCurrentSlide()
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")

  const nav = document.querySelector(".navbar")
  const buttons = nav.querySelectorAll("button")

  buttons.forEach((button) => {
    button.addEventListener("click", (ev) => {
      let href = ev.target.value
      if (ev.target.id === "prevBtn") {
        navigation.back()
      } else {
        navigate(href)
      }
    })
  })

  nextBtn.style.display = currentSlide === totalSlides ? "none" : ""

  prevBtn.value = "/" + (currentSlide - 1)
  nextBtn.value = "/" + (currentSlide + 1)
})
