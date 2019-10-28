import { colorNames, parseRGBHex, toHSL } from "../colors";

describe("colorNames", () => {
  test("has black", () => {
    expect(colorNames["#000000"]).toEqual("black");
  });

  test("has white", () => {
    expect(colorNames["#ffffff"]).toEqual("white");
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

    expect(parseRGBHex("fedc")).toEqual(null);
  });
});

describe("toHSL", () => {
  test("converts colors to HSL", () => {
    expect(toHSL(255, 255, 255)).toEqual("hsl(0.00, 0.00%, 100.00%)");

    expect(toHSL(0, 0, 0)).toEqual("hsl(0.00, 0.00%, 0.00%)");

    expect(toHSL(100, 150, 200)).toEqual("hsl(210.00, 47.62%, 58.82%)");
  });
});
