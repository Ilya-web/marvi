import Choices from "choices.js/public/assets/scripts/choices.js";

document.addEventListener("DOMContentLoaded", () => {
  // init js-choice selects-----------------------------------------
  const element = document.querySelectorAll(".js-choice");
  element.forEach((item) => {
    new Choices(item, {
      silent: false,
      searchEnabled: false,
      itemSelectText: "",
    });
  });
});
