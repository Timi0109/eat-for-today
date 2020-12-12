import React from "react";
import Authentication from "./Authentication";

describe("Authentication tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Authentication></Authentication>);
    expect(container).toMatchSnapshot();
  });

});
