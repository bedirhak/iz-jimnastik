// make .iz-slider background transparent when scrollY is equal to 0
window.addEventListener("scroll", () => {
  const slider = document.querySelector(".iz-header");
  if (window.innerWidth > 875) {
    if (window.scrollY === 0) {
      slider.style.backgroundColor = "transparent";
    } else {
      slider.style.backgroundColor = "var(--main-gold)";
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Add hover animation for .iz-value-container i element
  const valueContainer = document.querySelectorAll(
    ".iz-value-container > div"
  );

  valueContainer.forEach((container) => {
    container.addEventListener("mouseenter", () => {
      const icon = container.querySelector("i");

      if (icon) {
        icon.style.transition = "transform 0.5s ease-in-out";
        icon.style.transform = "translateY(-200%)";
        setTimeout(() => {
          icon.style.transition = "none";
          icon.style.transform = "translateY(200%)";
          setTimeout(() => {
            icon.style.transition = "transform 0.5s ease-in-out";
            icon.style.transform = "translateY(0)";
          }, 50);
        }, 500);
      }
    });
  });
});
