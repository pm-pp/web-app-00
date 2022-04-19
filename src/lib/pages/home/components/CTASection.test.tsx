import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";

import CTASection from "./CTASection";

it("should have exactly 3 links", () => {
  render(<CTASection />);

  expect(screen.getAllByRole("link")).toHaveLength(2);
});
