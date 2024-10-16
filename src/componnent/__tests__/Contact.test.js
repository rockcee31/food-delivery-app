import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("Should load contact us component", () => {
  render(<Contact />);
  
  // Find element by text "Contact"
  const heading = screen.getByText(/Contact/i);

  // Assertion
  expect(heading).toBeInTheDocument();
});
