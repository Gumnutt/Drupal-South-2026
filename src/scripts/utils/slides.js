document.addEventListener("astro:page-load", () => {
  measureEntryHeight()
  const header = document.querySelector("header")
  const footer = document.querySelector("footer")
  if (!header) return
  const headerHeight = header.offsetHeight
  document.documentElement.style.setProperty("--header-height", `${headerHeight}px`)
  if (!footer) return
  const footerHeight = footer.offsetHeight
  document.documentElement.style.setProperty("--footer-height", `${footerHeight}px`)
})


const measureEntryHeight = () => {
  const entryscreen = document.querySelector(".slide")
  if (!entryscreen) return
  const entryHeight = entryscreen.offsetHeight
  const windowHeight = window.innerHeight
  let isTaller = false
  if (entryHeight > windowHeight) {
    isTaller = true
  }
  entryscreen.style.setProperty("--is-shaq", isTaller)
  return
}