let scroll = document.querySelector(".scroll");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight ;
let up = document.querySelector(".up");

window.addEventListener("scroll", () => {
  let scroller = document.documentElement.scrollTop;
  scroll.style.width = `${(scroller / height) * 100}%`
  this.scrollY > (document.documentElement.clientHeight - 600) ? up.classList.add("show") : up.classList.remove("show");
});

up.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};



