(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            // remove selected from other buttons
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            // hide from other sections
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
{/* <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
  <script src="https://kit.fontawesome.com/58a810656e.js" crossorigin="anonymous"></script> */}
//   <script>
    // var typeData = new Typed(".role", {
    //   strings: [
    //     "Full Stack Developer",
    //     "Web Developer",
    //     "UI-UX Designer",
    //     "Backend Developer",
    //     "Coder",
    //   ],
    //   loop: true,
    //   typeSpeed: 100,
    //   backSpeed: 80,
    //   backDelay: 1000,
    // });
  {/* </script> */}
