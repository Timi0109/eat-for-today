import React from "react";
import DotIndicator from "./DotIndicator";

describe("DotIndicator tests", () => {
  it("renders correctly", () => {
    const { container } = render(<DotIndicator idx={0}></DotIndicator>);
    expect(container).toMatchSnapshot();
  });

});
