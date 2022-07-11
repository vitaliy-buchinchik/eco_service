const uaBtn = document.getElementById("button_ua");
const enBtn = document.getElementById("button_en");
const esBtn = document.getElementById("button_es");
const itBtn = document.getElementById("button_it");
const deBtn = document.getElementById("button_de");
const csBtn = document.getElementById("button_cs");
const plBtn = document.getElementById("button_pl");
const frBtn = document.getElementById("button_fr");

const uaGarbageLink = document.getElementById("garbage_removal_link_ua");
const enGarbageLink = document.getElementById("garbage_removal_link_en");
const esGarbageLink = document.getElementById("garbage_removal_link_es");
const itGarbageLink = document.getElementById("garbage_removal_link_it");
const deGarbageLink = document.getElementById("garbage_removal_link_de");
const csGarbageLink = document.getElementById("garbage_removal_link_cs");
const plGarbageLink = document.getElementById("garbage_removal_link_pl");
const frGarbageLink = document.getElementById("garbage_removal_link_fr");

const garbage_links = [uaGarbageLink, enGarbageLink, esGarbageLink, itGarbageLink, deGarbageLink, csGarbageLink, plGarbageLink, frGarbageLink];

console.log(uaGarbageLink.style);

function prelandLanguages(link) {
  for (let i = 0; i < garbage_links.length; i++) {
    if (garbage_links[i] == link) {
      garbage_links[i].style.display = "flex";
    } else {
      garbage_links[i].style.display = "none";
    }
  }
}

uaBtn.addEventListener("click", () => {prelandLanguages(uaGarbageLink)});
enBtn.addEventListener("click", () => {prelandLanguages(enGarbageLink)});
esBtn.addEventListener("click", () => {prelandLanguages(esGarbageLink)});
itBtn.addEventListener("click", () => {prelandLanguages(itGarbageLink)});
deBtn.addEventListener("click", () => {prelandLanguages(deGarbageLink)});
csBtn.addEventListener("click", () => {prelandLanguages(csGarbageLink)});
plBtn.addEventListener("click", () => {prelandLanguages(plGarbageLink)});
frBtn.addEventListener("click", () => {prelandLanguages(frGarbageLink)});
