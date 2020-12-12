import React from "react";
import Title from "./Title";

describe("Title tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Title></Title>);
    expect(container).toMatchSnapshot();
  });

});
