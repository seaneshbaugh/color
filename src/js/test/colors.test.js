import { colorNames, contrastColor, parseRGBHex, toHSL, toName, toRGB, toRGBHex, toRGBPercent } from "../colors";

describe("colorNames", () => {
  test("has black", () => {
    expect(colorNames["#000000"]).toEqual("black");
  });

  test("has white", () => {
    expect(colorNames["#ffffff"]).toEqual("white");
  });
});

describe("contrastColor", () => {
  test("returns black for light colors", () => {
    expect(contrastColor(255, 255, 255)).toEqual({ r: 0, g: 0, b: 0 });

    expect(contrastColor(100, 240, 210)).toEqual({ r: 0, g: 0, b: 0 });
  });

  test("returns white for light colors", () => {
    expect(contrastColor(0, 0, 0)).toEqual({ r: 255, g: 255, b: 255 });

    expect(contrastColor(110, 89, 10)).toEqual({ r: 255, g: 255, b: 255 });
  });
});

describe("parseRGBHex", () => {
  test("parses six digit RGB hex codes", () => {
    expect(parseRGBHex("#ffeedd")).toEqual({ r: 255, g: 238, b: 221 });
  });

  test("parses three digit RGB hex codes", () => {
    expect(parseRGBHex("#fed")).toEqual({ r: 255, g: 238, b: 221 });
  });

  test("returns null for invalid input", () => {
    expect(parseRGBHex("ffeedd")).toEqual(null);

    expect(parseRGBHex("asdfghjkl")).toEqual(null);

    expect(parseRGBHex("#fedc")).toEqual(null);
  });
});

describe("toHSL", () => {
  test("converts colors to HSL", () => {
    expect(toHSL(255, 255, 255)).toEqual("hsl(0.00, 0.00%, 100.00%)");

    expect(toHSL(0, 0, 0)).toEqual("hsl(0.00, 0.00%, 0.00%)");

    expect(toHSL(100, 150, 200)).toEqual("hsl(210.00, 47.62%, 58.82%)");
  });
});

describe("toName", () => {
  test("converts colors to their name", () => {
    expect(toName(255, 0, 0)).toEqual("red");

    expect(toName(0, 255, 0)).toEqual("lime");

    expect(toName(0, 0, 255)).toEqual("blue");
  });
});

describe("toRGB", () => {
  test("converts colors to RGB", () => {
    expect(toRGB(255, 0, 0)).toEqual("rgb(255, 0, 0)");

    expect(toRGB(0, 255, 0)).toEqual("rgb(0, 255, 0)");

    expect(toRGB(0, 0, 255)).toEqual("rgb(0, 0, 255)");
  });
});

describe("toRGBPercent", () => {
  test("converts colors to RGB", () => {
    expect(toRGBPercent(255, 0, 0)).toEqual("rgb(100.00%, 0.00%, 0.00%)");

    expect(toRGBPercent(0, 255, 0)).toEqual("rgb(0.00%, 100.00%, 0.00%)");

    expect(toRGBPercent(0, 0, 255)).toEqual("rgb(0.00%, 0.00%, 100.00%)");
  });
});
