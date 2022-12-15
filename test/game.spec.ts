import { describe, expect, it } from "@jest/globals";
import { sayHello } from "./../src/game";

describe("getGreeting", () => {
  it("should return Hello, John!", () => {
    expect(sayHello("John")).toEqual("Hello John!");
  });
});