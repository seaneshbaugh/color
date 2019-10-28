import pad from "../pad";

describe("pad", () => {
  test("pads to the start if original string is less than desired length", () => {
    expect(pad("xxxxxx", 8, "i")).toEqual("iixxxxxx");
  });

  test("does not pad the start if the original string is greater than desired length", () => {
    expect(pad("xxxxxx", 4, "i")).toEqual("xxxxxx");
  });
});
