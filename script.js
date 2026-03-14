const heroGlow = document.getElementById("heroGlow");
const heroTitle = document.getElementById("heroTitle");

document.addEventListener("mousemove", (event) => {
  if (heroGlow) {
    heroGlow.style.left = `${event.clientX}px`;
    heroGlow.style.top = `${event.clientY}px`;
  }

  if (heroTitle) {
    const x = (window.innerWidth / 2 - event.clientX) / 45;
    const y = (window.innerHeight / 2 - event.clientY) / 45;
    heroTitle.style.transform = `translate(${-x}px, ${-y}px)`;
  }
});
