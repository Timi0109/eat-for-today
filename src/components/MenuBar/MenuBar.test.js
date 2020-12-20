import React from "react";
import MenuBar from "./MenuBar";

describe("DotIndicator tests", () => {
  it("renders correctly", () => {
    const { container } = render(<MenuBar></MenuBar>);
    expect(container).toMatchSnapshot();
  });

});
