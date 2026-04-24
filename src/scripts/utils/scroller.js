document.addEventListener("astro:page-load", () => {
  const scroller = document.querySelector(".horizontal-scroll")

  if (scroller) {
    itemIndex(scroller, ".timeline--card")
  }

  function itemIndex(parentElement, selector) {
    const items = parentElement.querySelectorAll(selector)
    items.forEach((item, i) => {
      //random number between 0 and 1
      const random = Math.random()
      item.style = `--n: ${random};`
    })
  }
})
