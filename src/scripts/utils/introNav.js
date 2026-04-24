import { navigate } from "astro:transitions/client"

document.addEventListener("astro:page-load", () => {
  const introPrevBtn = document.getElementById("introPrevBtn")
  const introNextBtn = document.getElementById("introNextBtn")

  if (introPrevBtn) {
    introPrevBtn.addEventListener("click", () => {
      navigation.back()
    })
  }

  if (introNextBtn) {
    introNextBtn.addEventListener("click", () => {
      navigate(introNextBtn.value)
    })
  }
})
