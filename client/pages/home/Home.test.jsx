import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

describe("pages/home/Home", () => {
  test("Should render title correctly", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("#T_Title").text()).toBe("A simple message board");
  });

  test("Should set comment correctly", () => {
    const mockValue = "THIS IS A MOCK VALUE";
    const wrapper = shallow(<Home />);
    wrapper.find("#T_TextArea").simulate("change", { target: { name: "", value: mockValue } });
    expect(wrapper.state().comment).toBe(mockValue);
  });

  test("Can submit comment correctly", () => {
    const wrapper = shallow(<Home />);
    wrapper.find("#T_SubmitBtn").simulate("click");
  });
});
