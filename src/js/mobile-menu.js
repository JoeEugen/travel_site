let mobileMenu = document.querySelector(".nav__burger-icon ");
let mobileMenuList = document.querySelector(".nav__mobile-menu");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  mobileMenuList.classList.toggle("hidden");

  if (mobileMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
