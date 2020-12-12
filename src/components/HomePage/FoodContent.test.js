import React from "react";
import FoodContent from "./FoodContent";

describe("FoodContent tests", () => {
  it("renders correctly", () => {
    const { container } = render(<FoodContent></FoodContent>);
    expect(container).toMatchSnapshot();
  });

});
