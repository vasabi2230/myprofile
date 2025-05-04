function new_img1() {
  document.getElementById("img1").setAttribute("src", "img/new.img1.png");
}
function old_img1() {
  document.getElementById("img1").setAttribute("src", "img/img1.png");
}

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .skill-content, .skill-box, .contact form ", {
  origin: "buttom",
});
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-contant", { origin: "right" });
