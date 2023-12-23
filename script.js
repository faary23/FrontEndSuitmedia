let prevScrollPos = window.pageYOffset;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.classList.remove("header-hidden");
  } else {
    header.classList.add("header-hidden");
  }
  prevScrollPos = currentScrollPos;
});
