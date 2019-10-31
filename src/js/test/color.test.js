import Color from "../color";

describe("constructor", () => {
  test("accepts hex code string", () => {
    const white = new Color("#ffffff");

    expect(white.r).toEqual(255);

    expect(white.g).toEqual(255);

    expect(white.b).toEqual(255);
  });

  test("accepts object with r, g, and b properties", () => {
    const black = new Color({ r: 0, g: 0, b: 0 });

    expect(black.r).toEqual(0);

    expect(black.g).toEqual(0);

    expect(black.b).toEqual(0);
  });

  test("accepts three numbers between 0 and 255", () => {
    const red = new Color(255, 0, 0);

    expect(red.r).toEqual(255);

    expect(red.g).toEqual(0);

    expect(red.b).toEqual(0);
  });
});

describe("contrastColor", () => {
  test("returns black for light colors", () => {
    const white = new Color(255, 255, 255);

    const whiteContrastColor = white.contrastColor();

    expect(whiteContrastColor.r).toEqual(0);

    expect(whiteContrastColor.g).toEqual(0);

    expect(whiteContrastColor.b).toEqual(0);

    const mintGreen = new Color(100, 240, 210);

    const mintGreenContrastColor = mintGreen.contrastColor();

    expect(mintGreenContrastColor.r).toEqual(0);

    expect(mintGreenContrastColor.g).toEqual(0);

    expect(mintGreenContrastColor.b).toEqual(0);
  });

  test("returns white for dark colors", () => {
    const black = new Color(0, 0, 0);

    const blackContrastColor = black.contrastColor();

    expect(blackContrastColor.r).toEqual(255);

    expect(blackContrastColor.g).toEqual(255);

    expect(blackContrastColor.b).toEqual(255);

    const brown = new Color(110, 89, 10);

    const brownContrastColor = brown.contrastColor();

    expect(brownContrastColor.r).toEqual(255);

    expect(brownContrastColor.g).toEqual(255);

    expect(brownContrastColor.b).toEqual(255);
  });
});

describe("toHSL", () => {
  test("converts colors to HSL", () => {
    expect((new Color(255, 255, 255)).toHSL()).toEqual("hsl(0.00, 0.00%, 100.00%)");

    expect((new Color(0, 0, 0)).toHSL()).toEqual("hsl(0.00, 0.00%, 0.00%)");

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
