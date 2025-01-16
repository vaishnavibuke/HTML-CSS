// document.querySelectorAll(".story-btn").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     btn.classList.toggle("change");
//     btn.nextElementSibling.classList.toggle("change");
//   });
// });


document.querySelectorAll(".story-btn").forEach((btn) => {
    btn.addEventListener("mouseover", () => {
      btn.classList.add("change");
      btn.nextElementSibling.classList.add("change");
    });
  
    btn.addEventListener("mouseout", () => {
      btn.classList.remove("change");
      btn.nextElementSibling.classList.remove("change");
    });
  });
  
// document.querySelectorAll(".story-btn").forEach((btn) => {
//     btn.onmouseover = btn.onmouseout = (e) => {
//       const method = e.type === "mouseover" ? "add" : "remove";
//       btn.classList[method]("change");
//       btn.nextElementSibling.classList[method]("change");
//     };
//   });
  