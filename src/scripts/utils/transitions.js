const slideDuration = "500ms"

const customSlideAnimationForwards = {
  old: {
    name: "slideToLeft",
    duration: slideDuration,
    easing: "linear",
    fillMode: "forwards",
  },
  new: {
    name: "slideFromRight",
    duration: slideDuration,
    easing: "linear",
    fillMode: "forwards",
  },
}
const customSlideAnimationBackwards = {
  old: {
    name: "slideToRight",
    duration: slideDuration,
    easing: "linear",
    fillMode: "forwards",
  },
  new: {
    name: "slideFromLeft",
    duration: slideDuration,
    easing: "linear",
    fillMode: "forwards",
  },
}

// starswipe animation

const starSwipeDuration = "500ms"

const customStarSwipeAnimationForwards = {
  old: {
    name: "starSwipeLeft",
    duration: starSwipeDuration,
    easing: "linear",
    fillMode: "forwards",
  },
  new: {
    name: "starSwipeRight",
    duration: starSwipeDuration,
    easing: "linear",
    fillMode: "forwards",
  },
}

const customStarSwipeAnimationBackwards = {
  old: {
    name: "starSwipeRight",
    duration: starSwipeDuration,
    easing: "linear",
    fillMode: "forwards",
  },
  new: {
    name: "starSwipeLeft",
    duration: starSwipeDuration,
    easing: "linear",
    fillMode: "forwards",
  },
}

// circle grow animation

const circleGrowDuration = "500ms"

const customCircleGrowAnimationForwards = {
  old: {
    name: "circleGrow",
    duration: circleGrowDuration,
    easing: "linear",
    fillMode: "forwards",
  },
  new: {
    name: "circleGrow",
    duration: circleGrowDuration,
    easing: "linear",
    fillMode: "forwards",
  },
}

const customCircleGrowAnimationBackwards = {
  old: {
    name: "circleGrow",
    duration: circleGrowDuration,
    easing: "linear",
    fillMode: "forwards",
  },
  new: {
    name: "circleGrow",
    duration: circleGrowDuration,
    easing: "linear",
    fillMode: "forwards",
  },
}

export const circleGrow = {
  forwards: customCircleGrowAnimationForwards,
  backwards: customCircleGrowAnimationBackwards,
}

export const customSlide = {
  forwards: customSlideAnimationForwards,
  backwards: customSlideAnimationBackwards,
}

export const starswipe = {
  forwards: customStarSwipeAnimationForwards,
  backwards: customStarSwipeAnimationBackwards,
}
