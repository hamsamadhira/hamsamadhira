const facets = [
  "me@stage",
  "me@code",
  "me@nextplane",
  "me@artstudio",
  "me@brainspace"
];

const rotatingFacet = document.getElementById("rotatingFacet");
const heroTitle = document.getElementById("heroTitle");

let currentFacet = 0;

setInterval(() => {
  currentFacet = (currentFacet + 1) % facets.length;
  rotatingFacet.textContent = facets[currentFacet];
}, 1800);

document.addEventListener("mousemove", (event) => {
  if (!heroTitle) return;

  const x = (window.innerWidth / 2 - event.clientX) / 60;
  const y = (window.innerHeight / 2 - event.clientY) / 60;

  heroTitle.style.transform = `translate(${ -x }px, ${ -y }px)`;
  heroTitle.style.textShadow = `
    ${x}px ${y}px 0 rgba(255,255,255,0.18),
    ${x * 2}px ${y * 2}px 22px rgba(255,43,84,0.18)
  `;
});
