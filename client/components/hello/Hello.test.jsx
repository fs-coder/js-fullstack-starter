import React from "react";
import { shallow } from "enzyme";
import Hello from "./Hello";

describe("components/hello", () => {
  test("Test Hello", () => {
    const test1 = shallow(<Hello />);
    expect(test1.text()).toBe("Hello");
  });
});
