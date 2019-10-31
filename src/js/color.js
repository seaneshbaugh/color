import pad from "./pad";

class ColorArgumentError extends Error {
  constructor(message, ...args) {
    super(message, ...args);

    this.name = "ColorArgumentError";
  }
}

class RGBHexParseError extends Error {
  constructor(hexCode) {
    super(`"${hexCode}" is not a valid RGB hex code`);

    this.name = "RGBHexParseError";
  }
}

const expandRGBHex = (hexCode) => {
  if (hexCode.length === 3) {
    return `${hexCode[0]}${hexCode[0]}${hexCode[1]}${hexCode[1]}${hexCode[2]}${hexCode[2]}`;
  } else {
    return hexCode;
  }
};

const parseRGBHex = (hexCode) => {
  if (!hexCode || !hexCode.match(/^#(([a-fA-F0-9]){3}){1,2}$/i)) {
    throw new RGBHexParseError(hexCode);
  }

  const color = expandRGBHex(hexCode.slice(1));

  const r = parseInt(color.slice(0, 2), 16);

  const g = parseInt(color.slice(2, 4), 16);

  const b = parseInt(color.slice(4, 6), 16);

  return { r, g, b };
};

const parseRGB = (r, g, b) => {
  r = parseInt(r);

  g = parseInt(g);

  b = parseInt(b);

  if (isNaN(r) || isNaN(r) || isNaN(r) || r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    throw new ColorArgumentError("Expected three numbers between 0 and 255");
  }

  return { r, g, b };
};

const colorNames = {
  "#f0f8ff": "aliceblue",
  "#faebd7": "antiquewhite",
  "#00ffff": "aqua / cyan",
  "#7fffd4": "aquamarine",
  "#f0ffff": "azure",
  "#f5f5dc": "beige",
  "#ffe4c4": "bisque",
  "#000000": "black",
  "#ffebcd": "blanchedalmond",
  "#0000ff": "blue",
  "#8a2be2": "blueviolet",
  "#a52a2a": "brown",
  "#deb887": "burlywood",
  "#5f9ea0": "cadetblue",
  "#7fff00": "chartreuse",
  "#d2691e": "chocolate",
  "#ff7f50": "coral",
  "#6495ed": "cornflowerblue",
  "#fff8dc": "cornsilk",
  "#dc143c": "crimson",
  "#00008b": "darkblue",
  "#008b8b": "darkcyan",
  "#b8860b": "darkgoldenrod",
  "#a9a9a9": "darkgray / darkgrey",
  "#006400": "darkgreen",
  "#bdb76b": "darkkhaki",
  "#8b008b": "darkmagenta",
  "#556b2f": "darkolivegreen",
  "#ff8c00": "darkorange",
  "#9932cc": "darkorchid",
  "#8b0000": "darkred",
  "#e9967a": "darksalmon",
  "#8fbc8f": "darkseagreen",
  "#483d8b": "darkslateblue",
  "#2f4f4f": "darkslategray / darkslategrey",
  "#00ced1": "darkturquoise",
  "#9400d3": "darkviolet",
  "#ff1493": "deeppink",
  "#00bfff": "deepskyblue",
  "#696969": "dimgray / dimgrey",
  "#1e90ff": "dodgerblue",
  "#b22222": "firebrick",
  "#fffaf0": "floralwhite",
  "#228b22": "forestgreen",
  "#ff00ff": "fuchsia / magenta",
  "#dcdcdc": "gainsboro",
  "#f8f8ff": "ghostwhite",
  "#ffd700": "gold",
  "#daa520": "goldenrod",
  "#808080": "gray / grey",
  "#008000": "green",
  "#adff2f": "greenyellow",
  "#f0fff0": "honeydew",
  "#ff69b4": "hotpink",
  "#cd5c5c": "indianred",
  "#4b0082": "indigo",
  "#fffff0": "ivory",
  "#f0e68c": "khaki",
  "#e6e6fa": "lavender",
  "#fff0f5": "lavenderblush",
  "#7cfc00": "lawngreen",
  "#fffacd": "lemonchiffon",
  "#add8e6": "lightblue",
  "#f08080": "lightcoral",
  "#e0ffff": "lightcyan",
  "#fafad2": "lightgoldenrodyellow",
  "#d3d3d3": "lightgray / lightgrey",
  "#90ee90": "lightgreen",
  "#ffb6c1": "lightpink",
  "#ffa07a": "lightsalmon",
  "#20b2aa": "lightseagreen",
  "#87cefa": "lightskyblue",
  "#778899": "lightslategray / lightslategrey",
  "#b0c4de": "lightsteelblue",
  "#ffffe0": "lightyellow",
  "#00ff00": "lime",
  "#32cd32": "limegreen",
  "#faf0e6": "linen",
  "#800000": "maroon",
  "#66cdaa": "mediumaquamarine",
  "#0000cd": "mediumblue",
  "#ba55d3": "mediumorchid",
  "#9370db": "mediumpurple",
  "#3cb371": "mediumseagreen",
  "#7b68ee": "mediumslateblue",
  "#00fa9a": "mediumspringgreen",
  "#48d1cc": "mediumturquoise",
  "#c71585": "mediumvioletred",
  "#191970": "midnightblue",
  "#f5fffa": "mintcream",
  "#ffe4e1": "mistyrose",
  "#ffe4b5": "moccasin",
  "#ffdead": "navajowhite",
  "#000080": "navy",
  "#fdf5e6": "oldlace",
  "#808000": "olive",
  "#6b8e23": "olivedrab",
  "#ffa500": "orange",
  "#ff4500": "orangered",
  "#da70d6": "orchid",
  "#eee8aa": "palegoldenrod",
  "#98fb98": "palegreen",
  "#afeeee": "paleturquoise",
  "#db7093": "palevioletred",
  "#ffefd5": "papayawhip",
  "#ffdab9": "peachpuff",
  "#cd853f": "peru",
  "#ffc0cb": "pink",
  "#dda0dd": "plum",
  "#b0e0e6": "powderblue",
  "#800080": "purple",
  "#ff0000": "red",
  "#bc8f8f": "rosybrown",
  "#4169e1": "royalblue",
  "#8b4513": "saddlebrown",
  "#fa8072": "salmon",
  "#f4a460": "sandybrown",
  "#2e8b57": "seagreen",
  "#fff5ee": "seashell",
  "#a0522d": "sienna",
  "#c0c0c0": "silver",
  "#87ceeb": "skyblue",
  "#6a5acd": "slateblue",
  "#708090": "slategray / slategrey",
  "#fffafa": "snow",
  "#00ff7f": "springgreen",
  "#4682b4": "steelblue",
  "#d2b48c": "tan",
  "#008080": "teal",
  "#d8bfd8": "thistle",
  "#ff6347": "tomato",
  "#40e0d0": "turquoise",
  "#ee82ee": "violet",
  "#f5deb3": "wheat",
  "#ffffff": "white",
  "#f5f5f5": "whitesmoke",
  "#ffff00": "yellow",
  "#9acd32": "yellowgreen"
};

class Color {
  constructor(...args) {
    switch(args.length) {
    case 1:
      switch(typeof(args[0])) {
      case "string":
        ({ r: this.r, g: this.g, b: this.b } = parseRGBHex(args[0]));

        break;
      case "object":
        ({ r: this.r, g: this.g, b: this.b } = parseRGB(args[0].r, args[0].g, args[0].b));

        break;
      default:
        throw new ColorArgumentError("Expected either a RGB hex string or an object with r, g, and b properties");
      }

      break;
    case 3:
      ({ r: this.r, g: this.g, b: this.b } = parseRGB(args[0], args[1], args[2]));

      break;
    default:
      throw new ColorArgumentError(`Wrong number of arguments, expected 1 or 3 but got ${args.length}`);
    }
  }

  contrastColor() {
    if (1 - (0.299 * this.r + 0.587 * this.g + 0.114 * this.b) / 255 < 0.5) {
      return new Color(0, 0, 0);
    } else {
      return new Color(255, 255, 255);
    }
  }

  toHSL() {
    const r = this.r / 255;

    const g = this.g / 255;

    const b = this.b / 255;

    const max = Math.max(r, g, b);

    const min = Math.min(r, g, b);

    let h = 0;

    let s = 0;

    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;

      if (l > 0.5) {
        s = d / (2 - max - min);
      } else {
        s = d / (max + min);
      }

      switch(max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break; // eslint-disable-line no-ternary
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
      }

      h /= 6;
    }

    return `hsl(${(h * 360.0).toFixed(2)}, ${(s * 100.0).toFixed(2)}%, ${(l * 100.0).toFixed(2)}%)`;
  }

  toName() {
    return colorNames[this.toRGBHex()];
  }

  toRGB() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  toRGBHex() {
    return `#${pad(this.r.toString(16), 2, "0")}${pad(this.g.toString(16), 2, "0")}${pad(this.b.toString(16), 2, "0")}`;
  }

  toRGBPercent() {
    return `rgb(${((this.r / 255.0) * 100.0).toFixed(2)}%, ${((this.g / 255.0) * 100.0).toFixed(2)}%, ${((this.b / 255.0) * 100.0).toFixed(2)}%)`;
  }
}

export { Color, ColorArgumentError, RGBHexParseError };
