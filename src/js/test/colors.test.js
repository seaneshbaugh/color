import { colorNames, parseRGBHex } from "../colors";

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
