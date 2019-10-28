import { contrastColor, parseRGBHex, toHSL, toName, toRGB, toRGBHex, toRGBPercent } from "./colors";

const onReady = (completed) => {
  if (document.readyState === "complete") {
    setTimeout(completed);
  } else {
    document.addEventListener("DOMContentLoaded", completed, false);
  }
};

const setColor = (hexCode) => {
  const backgroundColor = parseRGBHex(hexCode);

  if (!backgroundColor) {
    window.location.hash = "#ffffff";

    return;
  }

  document.querySelector("body").style.background = hexCode;

  let textColor = contrastColor(backgroundColor.r, backgroundColor.g, backgroundColor.b);

  textColor = toRGBHex(textColor.r, textColor.g, textColor.b);

  document.querySelectorAll(".color-text").forEach((colorText) => {
    colorText.style.color = textColor;
  });

  document.querySelector(".rgb-hex").textContent = hexCode;

  document.querySelector(".rgb").textContent = toRGB(backgroundColor.r, backgroundColor.g, backgroundColor.b);

  document.querySelector(".rgb-percent").textContent = toRGBPercent(backgroundColor.r, backgroundColor.g, backgroundColor.b);

  document.querySelector(".hsl").textContent = toHSL(backgroundColor.r, backgroundColor.g, backgroundColor.b);

  document.querySelector(".name").textContent = toName(backgroundColor.r, backgroundColor.g, backgroundColor.b) || "";

  setFavicon(backgroundColor.r, backgroundColor.g, backgroundColor.b);

  document.title = `${hexCode} - Color`;
};

const setFavicon = (r, g, b) => {
  let link = document.querySelector("link[rel~='icon']");

  if (!link) {
    link = document.createElement("link");

    link.setAttribute("rel", "icon");

    document.head.appendChild(link);
  }

  const canvas = document.createElement("canvas");

  canvas.width  = 16;

  canvas.height = 16;

  const context = canvas.getContext("2d");

  context.fillStyle = `rgb(${r}, ${g}, ${b})`;

  context.fillRect(0, 0, 16, 16);

  context.fill();

  link.type = "image/x-icon";

  link.href = canvas.toDataURL();
};

onReady(() => {
  setColor(window.location.hash);

  window.addEventListener("hashchange", function() {
    setColor(window.location.hash);
  }, false);
});
