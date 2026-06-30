const themeToggle = document.getElementById("themeToggle");
const iconSun = document.getElementById("iconSun");
const iconMoon = document.getElementById("iconMoon");
let theme = "light";
themeToggle.addEventListener("click", () => {
  theme = theme === "light" ? "dark" : "light";
  document.body.setAttribute("data-theme", theme);
  iconSun.style.display = theme === "light" ? "block" : "none";
  iconMoon.style.display = theme === "light" ? "none" : "block";
});

const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);
revealEls.forEach((el) => observer.observe(el));