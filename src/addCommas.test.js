import addCommas from "./addCommas";
import { render, fireEvent } from "@testing-library/react";



it("adds commas to number", function() {
  expect (addCommas(1555) === "1,555")

})