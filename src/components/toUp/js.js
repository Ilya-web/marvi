//toUp -----------------------------------------------------
const toUp = document.querySelector(".toUp");

toUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  if (document.documentElement.scrollTop > 1000) {
    toUp.classList.add("visible");
  } else {
    toUp.classList.remove("visible");
  }
});
