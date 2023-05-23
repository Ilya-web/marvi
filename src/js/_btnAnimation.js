// click animation---------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  function btnAnimation() {
    const buttons = document.querySelectorAll(".click-animation");

    Array.prototype.forEach.call(buttons, function (b) {
      b.addEventListener("click", createRipple);
    });

    function createRipple(event) {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");

      const max = Math.max(this.offsetWidth, this.offsetHeight);

      ripple.style.width = ripple.style.height = max * 2 + "px";

      const rect = this.getBoundingClientRect();

      ripple.style.left = event.clientX - rect.left - max + "px";
      ripple.style.top = event.clientY - rect.top - max + "px";

      this.appendChild(ripple);

      setTimeout(() => {
        document.querySelector(".ripple").remove();
      }, 400);
    }
  }
  btnAnimation();
});
