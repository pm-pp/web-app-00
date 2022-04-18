import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";

import SomeText from "./SomeSection";

it("Displays an heading with text", async () => {
  render(<SomeText />);

  expect(screen.getByRole("heading").textContent).toContain("Section 1.10.32");
  expect(screen.getByRole("textbox").textContent).toContain(
    "Sed ut perspiciatis"
  );
});
