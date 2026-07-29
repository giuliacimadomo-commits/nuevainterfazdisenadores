
const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
menuButton.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded","false");
}));

const progress = document.querySelector(".progress");
const backTop = document.querySelector(".back-top");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
  backTop.classList.toggle("show", scrollY > 650);
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold:.14});
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const navLinks = [...document.querySelectorAll(".nav-links a[data-section]")];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.toggle("active", link.dataset.section === entry.target.id));
  });
}, {rootMargin:"-35% 0px -55% 0px"});
document.querySelectorAll("main section[id]").forEach(section => sectionObserver.observe(section));

document.querySelectorAll(".reco-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("done");
    card.setAttribute("aria-pressed", String(card.classList.contains("done")));
  });
  card.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      card.click();
    }
  });
});

const slider = document.querySelector(".compare-slider");
const after = document.querySelector(".compare-after");
slider.addEventListener("input", () => {
  after.style.width = slider.value + "%";
});
