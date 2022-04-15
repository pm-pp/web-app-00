import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";

import SomeText from "./SomeText";

it("Displays an heading with text", async () => {
  render(<SomeText />);

  expect(screen.getByRole("heading").textContent).toBe("Hello");
});
