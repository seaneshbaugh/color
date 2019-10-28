import { contrastColor, parseRGBHex, toHSL, toName, toRGB, toRGBHex, toRGBPercent } from "./colors";

onReady(function() {
  setColor(window.location.hash);

  window.addEventListener("hashchange", function() {
    setColor(window.location.hash);
  }, false);
});

function setColor(hexCode) {
  var backgroundColor, textColor, colorTexts, colorName;

  backgroundColor = parseRGBHex(hexCode);

  if (backgroundColor) {
    document.getElementsByTagName("body")[0].style.background = hexCode;

    textColor = contrastColor(backgroundColor.r, backgroundColor.g, backgroundColor.b);

    textColor = toRGBHex(textColor.r, textColor.g, textColor.b);

    colorTexts = document.querySelectorAll(".color-text");

    for (var i = 0; i < colorTexts.length; ++i) {
      colorTexts[i].style.color = textColor;
    }

    document.getElementById("rgb-hex").textContent = hexCode;

    document.getElementById("rgb").textContent = toRGB(backgroundColor.r, backgroundColor.g, backgroundColor.b);

    document.getElementById("rgb-percent").textContent = toRGBPercent(backgroundColor.r, backgroundColor.g, backgroundColor.b);

    document.getElementById("hsl").textContent = toHSL(backgroundColor.r, backgroundColor.g, backgroundColor.b);

    colorName = toName(backgroundColor.r, backgroundColor.g, backgroundColor.b);

    if (colorName) {
      document.getElementById("name").textContent = colorName;
    } else {
      document.getElementById("name").textContent = "";
    }

    setFavicon(backgroundColor.r, backgroundColor.g, backgroundColor.b);

    document.title = hexCode + " - Color";
  } else {
    window.location.hash = "#ffffff";
  }
}

function setFavicon(r, g, b) {
  var link, canvas, context;

  link = document.querySelector("link[rel~='icon']");

  if (!link) {
    link = document.createElement("link");

    link.setAttribute("rel", "icon");

    document.head.appendChild(link);
  }

  canvas = document.createElement("canvas");

  canvas.width  = 16;

  canvas.height = 16;

  context = canvas.getContext("2d");

  context.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";

  context.fillRect(0, 0, 16, 16);

  context.fill();

  link.type = "image/x-icon";

  link.href = canvas.toDataURL();
}

function onReady(completed) {
  if (document.readyState === "complete") {
    setTimeout(completed);
  } else {
    document.addEventListener("DOMContentLoaded", completed, false);
  }
}
