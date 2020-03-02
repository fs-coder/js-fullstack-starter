import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

describe("pages/home/Home", () => {
  test("Should render title correctly", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("#T_Title").text()).toBe("A simple message board");
  });

  test("Should set name correctly", () => {
    const mockValue = "MOCK_VALUE";
    const wrapper = shallow(<Home />);
    wrapper.find("#T_Name").simulate("change", { target: { name: "", value: mockValue } });
    expect(wrapper.state().name).toBe(mockValue);
  });

  test("Should set message correctly", () => {
    const mockValue = "MOCK_VALUE";
    const wrapper = shallow(<Home />);
    wrapper.find("#T_Message").simulate("change", { target: { name: "", value: mockValue } });
    expect(wrapper.state().message).toBe(mockValue);
  });

  test("Submit button disabled status", () => {
    const wrapper = shallow(<Home />);

    // By default, it should be disabled
    expect(wrapper.find("#T_SubmitBtn").prop("disabled")).toBe(true);

    // Should not be disabled when entering a message
    wrapper.find("#T_Message").simulate("change", { target: { name: "", value: "Whatever" } });
    expect(wrapper.find("#T_SubmitBtn").prop("disabled")).toBe(false);
  });
});
