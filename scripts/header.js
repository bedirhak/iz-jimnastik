document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".iz-mobile-menu");
  const navList = document.querySelector(".iz-header-nav ul");
  const navItems = navList.querySelectorAll("li");

  let isMenuOpen = false;

  menuIcon.addEventListener("click", () => {
    if (!isMenuOpen) {
      navList.style.display = "flex";
      navItems.forEach((item, index) => {
        item.style.display = "block";
        item.style.opacity = "0";
        item.style.transform = "translateX(-20px)";
        item.style.transition = `opacity 0.3s ease ${index * 0.15
          }s, transform 0.3s ease ${index * 0.15}s`;
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateX(0)";
        }, 10);
      });
    } else {
      // hide the menu from left to right starting from the last item
      navItems.forEach((item, index) => {
        item.style.transition = `opacity 0.3s ease ${(navItems.length - index - 1) * 0.15
          }s, transform 0.3s ease ${(navItems.length - index - 1) * 0.15}s`;
        item.style.opacity = "0";
        item.style.transform = "translateX(-20px)";
        setTimeout(() => {
          item.style.display = "none";
        }, (navItems.length - index - 1) * 150 + 300); // Wait for animation to finish
      });
    }
    isMenuOpen = !isMenuOpen;
  });

  // Close the menu when clicking outside of it whem mobile menu is open
  document.addEventListener("click", (event) => {
    if (!menuIcon.contains(event.target) && !navList.contains(event.target)) {
      if (isMenuOpen && window.innerWidth <= 875) {
        navItems.forEach((item, index) => {
          item.style.transition = `opacity 0.3s ease ${index * 0.15
            }s, transform 0.3s ease ${index * 0.15}s`;
          item.style.opacity = "0";
          item.style.transform = "translateX(-20px)";
        });

        setTimeout(() => {
          navItems.forEach((item) => {
            item.style.display = "none";
          });
          navList.style.display = "none";
        }, navItems.length * 150 + 300); // Wait for all animations to finish
        isMenuOpen = false;
        const icon = menuIcon.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    }
  });

  // Close the menu when clicking on a nav item
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (isMenuOpen) {
        navItems.forEach((item, index) => {
          item.style.transition = `opacity 0.3s ease ${index * 0.15
            }s, transform 0.3s ease ${index * 0.15}s`;
          item.style.opacity = "0";
          item.style.transform = "translateX(-20px)";
        });
        setTimeout(() => {
          navList.style.display = "none";
        }, navItems.length * 200 + 300); // Wait for all animations to finish
        isMenuOpen = false;
      }
    });
  });

  // open li items when resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 875) {
      navList.style.display = "flex";
      navItems.forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
        item.style.transition = "none"; // Remove transition for desktop view
      });
      isMenuOpen = true;
    } else if (window.innerWidth <= 875 && !isMenuOpen) {
      navList.style.display = "none";
    }
  });

  // change the icon when clicking on it
  menuIcon.addEventListener("click", () => {
    const icon = menuIcon.querySelector("i");
    if (isMenuOpen) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });

  //close the menu when resize to mobile
  window.addEventListener("resize", () => {
    const icon = menuIcon.querySelector("i");

    if (window.innerWidth <= 875) {
      navList.style.display = "none";
      isMenuOpen = false;
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }

    if (window.innerWidth > 875) {
      navList.style.display = "flex";
      navItems.forEach((item) => {
        item.style.display = "block"; // Remove transition for desktop view
      });
    }
  });
});
