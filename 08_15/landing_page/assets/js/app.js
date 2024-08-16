// Hamburger menu selections

// scroll-to-top selection
<script>
     var lightbox = new SimpleLightbox(".stars-gallery a");
</script>
// Hamburger menu functionality

// Theme switcher selection
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
  // Toggle website theme
  document.body.classList.toggle("dark");
});

// Close menu on nav menu clicks
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Theme switcher functionality
const navLink = document.querySelectorAll("#nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}