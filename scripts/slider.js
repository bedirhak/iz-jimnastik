let slider = document.querySelector(".slider"),
  sliderItem = document.querySelectorAll(".slider-item"),
  dots = document.querySelectorAll(".dots-item"),
  progressFill = document.querySelector(".slider-progress-fill"),
  step = sliderItem[0].offsetHeight;

//Some data
let currentPage = 0,
  canDrag = false,
  canWeel = true,
  intialMousePostions = 0,
  progressInterval = null,
  autoSlideInterval = null,
  progressWidth = 0;

//functions
const changePage = (nextPage) => {
  slider.style.transform = `translateY(-${step * nextPage}px)`;
  resetProgress();
  startProgress();
};

const getNextPage = (direction) => {
  if (direction === "next" && currentPage < sliderItem.length - 1) {
    currentPage = currentPage + 1;
    return currentPage;
  } else if (direction === "prev" && currentPage > 0) {
    currentPage = currentPage - 1;
    return currentPage;
  } else if (direction === "next" && currentPage === sliderItem.length - 1) {
    // Loop back to first slide
    currentPage = 0;
    return currentPage;
  } else {
    return false;
  }
};

const togleActiveBtn = (id) => {
  dots.forEach((item) => {
    item.className = "dots-item";
  });
  dots[id].classList.add("active");
};

const resetCanWeel = () => (canWeel = true);

// Progress bar functions
const resetProgress = () => {
  progressWidth = 0;
  progressFill.style.width = "0%";
  clearInterval(progressInterval);
};

const startProgress = () => {
  progressInterval = setInterval(() => {
    progressWidth += 2; // 2% every 100ms = 100% in 5 seconds
    progressFill.style.width = progressWidth + "%";

    if (progressWidth >= 100) {
      clearInterval(progressInterval);
      // Auto advance to next slide
      setTimeout(() => {
        let nextPage = getNextPage("next");
        if (nextPage !== false) {
          togleActiveBtn(nextPage);
          changePage(nextPage);
        }
      }, 100);
    }
  }, 100); // Update every 100ms
};

const stopAutoSlide = () => {
  clearInterval(progressInterval);
  clearInterval(autoSlideInterval);
};

const startAutoSlide = () => {
  resetProgress();
  startProgress();
};

//listeners

//Control slider use ArrowUp and ArrowDown
window.addEventListener("keyup", (e) => {
  let nextPage =
    e.key === "ArrowUp"
      ? getNextPage("prev")
      : e.key === "ArrowDown"
        ? getNextPage("next")
        : false;
  if (nextPage !== false) {
    stopAutoSlide();
    togleActiveBtn(nextPage);
    changePage(nextPage);
  }
});

//Control slider use dots
dots.forEach((item, id) => {
  item.addEventListener("click", (e) => {
    stopAutoSlide();
    currentPage = id;
    togleActiveBtn(id);
    changePage(currentPage);
  });
});

//Control slider use drag-n-drop
slider.addEventListener("mousedown", (e) => {
  canDrag = true;
  intialMousePostions = e.pageY;
  stopAutoSlide();
});

slider.addEventListener("mouseup", (e) => {
  canDrag = false;
});

slider.addEventListener("mousemove", (e) => {
  if (canDrag) {
    let currentMousePosition = e.pageY;
    let nextPage = false;
    if (intialMousePostions - currentMousePosition > 30) {
      nextPage = getNextPage("next");
      canDrag = false;
    } else if (intialMousePostions - currentMousePosition < -30) {
      nextPage = getNextPage("prev");
      canDrag = false;
    }
    if (nextPage !== false) {
      togleActiveBtn(nextPage);
      changePage(nextPage);
    }
  }
});

//Control slider use touch (for mobile, tablet or another sensor device)
slider.addEventListener("touchstart", (e) => {
  canDrag = true;
  intialMousePostions = e.targetTouches[0].pageY;
  stopAutoSlide();
});

slider.addEventListener("touchend", (e) => {
  canDrag = false;
});

slider.addEventListener("touchmove", (e) => {
  if (canDrag) {
    let currentMousePosition = e.targetTouches[0].pageY;
    let nextPage = false;
    if (intialMousePostions - currentMousePosition > 30) {
      nextPage = getNextPage("next");
      canDrag = false;
    } else if (intialMousePostions - currentMousePosition < -30) {
      nextPage = getNextPage("prev");
      canDrag = false;
    }
    if (nextPage !== false) {
      togleActiveBtn(nextPage);
      changePage(nextPage);
    }
  }
});

//re-calculate step and slider transform on window resize
window.addEventListener("resize", (e) => {
  step = sliderItem[0].offsetHeight;
  changePage(currentPage);
});

// Start auto slide when page loads
document.addEventListener("DOMContentLoaded", () => {
  startAutoSlide();
});

// Pause on hover (optional)
slider.addEventListener("mouseenter", () => {
  stopAutoSlide();
});

slider.addEventListener("mouseleave", () => {
  startAutoSlide();
});
