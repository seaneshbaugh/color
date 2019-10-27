import { colorNames } from "../color-names";

describe("colorNames", () => {
  test("has black", () => {
    expect(colorNames["#000000"]).toEqual("black");
  });

  test("has white", () => {
    expect(colorNames["#ffffff"]).toEqual("white");
  });
});
