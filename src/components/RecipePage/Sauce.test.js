import React from "react";
import Sauces from "./Sauces";

describe("Sauces tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Sauces></Sauces>);
    expect(container).toMatchSnapshot();
  });

});
