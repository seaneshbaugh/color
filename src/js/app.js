import { Color, RGBHexParseError } from "./color";

const DEFAULT_COLOR = "#ffffff";

const onReady = (completed) => {
  if (document.readyState === "complete") {
    setTimeout(completed);
  } else {
    document.addEventListener("DOMContentLoaded", completed, false);
  }
};

const setBackground = (backgroundColor) => {
  document.querySelector("body").style.background = backgroundColor.toRGBHex();
};

const setText = (backgroundColor) => {
  const textColorRGBHex = backgroundColor.contrastColor().toRGBHex();

  document.querySelectorAll(".color-text").forEach((colorText) => {
    colorText.style.color = textColorRGBHex;
  });

  const backgroundColorRGBHex = backgroundColor.toRGBHex();

  document.querySelector(".rgb-hex").textContent = backgroundColorRGBHex;

  document.querySelector(".rgb").textContent = backgroundColor.toRGB();

  document.querySelector(".rgb-percent").textContent = backgroundColor.toRGBPercent();

  document.querySelector(".hsl").textContent = backgroundColor.toHSL();

  document.querySelector(".name").textContent = backgroundColor.toName() || "";

  document.title = `${backgroundColorRGBHex} - Color`;
};

const setFavicon = (faviconColor) => {
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

  context.fillStyle = faviconColor.toRGB();

  context.fillRect(0, 0, 16, 16);

  context.fill();

  link.type = "image/x-icon";

  link.href = canvas.toDataURL();
};

const setColorpickerLabel = (backgroundColor) => {
  const colorPickerLabel = document.querySelector(".color-picker-label");

  colorPickerLabel.style.background = backgroundColor.toRGBHex();
  colorPickerLabel.style.border = `2px solid ${backgroundColor.contrastColor().toRGBHex()}`;
  colorPickerLabel.style.color = backgroundColor.contrastColor().toRGBHex();
};

const update = (hexCode) => {
  let backgroundColor;

  try {
    backgroundColor = new Color(hexCode);
  } catch (error) {
    if (error instanceof RGBHexParseError) {
      window.location.hash = DEFAULT_COLOR;
    } else {
      throw error;
    }
  }

  if (!backgroundColor) {
    return;
  }

  setBackground(backgroundColor);
  setText(backgroundColor);
  setFavicon(backgroundColor);
  setColorpickerLabel(backgroundColor);
};

onReady(() => {
  window.addEventListener("hashchange", () => {
    update(window.location.hash);
  }, false);

  document.querySelector(".color-picker").addEventListener("change", (event) => {
    window.location.hash = event.target.value;
  });

  update(window.location.hash);
});
