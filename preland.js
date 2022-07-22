const uaGarbageLink = document.getElementById("garbage_removal_link_ua");
const enGarbageLink = document.getElementById("garbage_removal_link_en");
const esGarbageLink = document.getElementById("garbage_removal_link_es");
const itGarbageLink = document.getElementById("garbage_removal_link_it");
const deGarbageLink = document.getElementById("garbage_removal_link_de");
const csGarbageLink = document.getElementById("garbage_removal_link_cs");
const plGarbageLink = document.getElementById("garbage_removal_link_pl");
const frGarbageLink = document.getElementById("garbage_removal_link_fr");

const uaProductLink = document.getElementById("products_link_ua");
const enProductLink = document.getElementById("products_link_en");
const esProductLink = document.getElementById("products_link_es");
const itProductLink = document.getElementById("products_link_it");
const deProductLink = document.getElementById("products_link_de");
const csProductLink = document.getElementById("products_link_cs");
const plProductLink = document.getElementById("products_link_pl");
const frProductLink = document.getElementById("products_link_fr");

const garbageLinks = [uaGarbageLink, enGarbageLink, esGarbageLink, itGarbageLink, deGarbageLink, csGarbageLink, plGarbageLink, frGarbageLink];
const productLinks = [uaProductLink, enProductLink, esProductLink, itProductLink, deProductLink, csProductLink, plProductLink, frProductLink];

function prelandLanguages(garbageLink, productLink) {
  for (let i = 0; i < garbageLinks.length; i++) {
    if (garbageLinks[i] == garbageLink) {
      garbageLinks[i].style.display = "flex";
    } else {
      garbageLinks[i].style.display = "none";
    }
  }

  for (let i = 0; i < productLinks.length; i++) {
    if (productLinks[i] == productLink) {
      productLinks[i].style.display = "flex";
    } else {
      productLinks[i].style.display = "none";
    }
  }
}

const uaBtn = document.getElementById("button_ua").addEventListener("click", () => {prelandLanguages(uaGarbageLink, uaProductLink)});
const enBtn = document.getElementById("button_en").addEventListener("click", () => {prelandLanguages(enGarbageLink, enProductLink)});
const esBtn = document.getElementById("button_es").addEventListener("click", () => {prelandLanguages(esGarbageLink, esProductLink)});
const itBtn = document.getElementById("button_it").addEventListener("click", () => {prelandLanguages(itGarbageLink, itProductLink)});
const deBtn = document.getElementById("button_de").addEventListener("click", () => {prelandLanguages(deGarbageLink, deProductLink)});
const csBtn = document.getElementById("button_cs").addEventListener("click", () => {prelandLanguages(csGarbageLink, csProductLink)});
const plBtn = document.getElementById("button_pl").addEventListener("click", () => {prelandLanguages(plGarbageLink, plProductLink)});
const frBtn = document.getElementById("button_fr").addEventListener("click", () => {prelandLanguages(frGarbageLink, frProductLink)});
