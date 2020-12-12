import React from "react";
import RecipeContent from "./RecipeContent";

describe("RecipeContent tests", () => {
  it("renders correctly", () => {
      const r = 
           [ {
              "name":"Beef and Broccoli Lo Mein",
              "meat":"Beef",
              "veggies":"Brocoli",
              "others":"Pasta",
              "url":"https://img.buzzfeed.com/buzzfeed-static/static/2020-04/7/14/asset/af2b435023ab/sub-buzz-265-1586268288-7.jpg",
              "instruction":[
                 "Cook pasta: In a large pot with boiling water, cook the noodles according to package directions. Add the broccoli the last 5 minutes of cooking and let them cook until tender. Drain the noodles and broccoli.",
                 "Cook steak: While the pasta is cooking, add olive oil to a medium sized skillet. Cook the steak until no longer pink. Add the garlic, and carrots and cook for a minute more.",
                 "Mix sauce: In a small bowl whisk together the brown sugar soy sauce, hoisin sauce, sesame oil, ginger, red pepper and pepper.",
                 "Toss everything together: Add the spaghetti to the skillet and pour the sauce on top and toss until incorporated."
              ]}]
           
    const { container } = render(<RecipeContent food={{}} recipes={r}></RecipeContent>);
    expect(container).toMatchSnapshot();
  });

});
