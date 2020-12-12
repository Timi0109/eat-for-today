import React from "react";
import Footer from "./Footer";

describe("Footer tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Footer></Footer>);
    expect(container).toMatchSnapshot();
  });

});
