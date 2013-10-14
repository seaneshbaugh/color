onReady(function() {
  setColor(window.location.hash);

  window.addEventListener("hashchange", function() {
    setColor(window.location.hash);
  }, false);
});

function setColor(hexCode) {
  var backgroundColor, textColor;

  backgroundColor = parseColor(hexCode);

  if (backgroundColor) {
    textColor = contrastColor(backgroundColor.r, backgroundColor.g, backgroundColor.b);

    document.getElementsByTagName("body")[0].style.background = "rgb(" + backgroundColor.r + ", " + backgroundColor.g + ", " + backgroundColor.b + ")";

    document.getElementById("color").style.color = "rgb(" + textColor.r + ", " + textColor.g + ", " + textColor.b + ")";

    hexCode = toRGBHex(backgroundColor.r, backgroundColor.g, backgroundColor.b);

    document.getElementById("color").textContent = hexCode;

    document.title = hexCode + " - Color";
  } else {
    window.location.hash = "#ffffff";
  }
}

function parseColor(hexCode) {
  var color, r, g, b;

  if (hexCode && (/^#(([a-fA-F0-9]){3}){1,2}$/i).exec(hexCode)) {
    color = hexCode.slice(1);

    if (color.length < 6) {
      color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    }

    r = parseInt(color.slice(0, 2), 16);

    g = parseInt(color.slice(2, 4), 16);

    b = parseInt(color.slice(4, 6), 16);

    return {r: r, g: g, b: b};
  } else {
    return null;
  }
}

function contrastColor(r, g, b) {
  if (1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.5) {
    return {r: 0, g: 0, b: 0};
  } else {
    return {r: 255, g: 255, b: 255};
  }
}

function pad(original, length, padString) {
  var padding;

  padding = "";

  if (original.length < length) {
    if (!padString) {
      padString = " ";
    } else {
      padString += "";
    }

    while (padding.length < length - original.length) {
      padding += padString;
    }

    padding = padding.slice(0, length - original.length);
  }

  return padding + original;
}

function toRGBHex(r, g, b) {
  return "#" + pad(r.toString(16), 2, "0") + pad(g.toString(16), 2, "0") + pad(b.toString(16), 2, "0");
}

function onReady(completed) {
  if (document.readyState === "complete") {
    setTimeout(completed);
  } else {
    document.addEventListener("DOMContentLoaded", completed, false);
  }
}
