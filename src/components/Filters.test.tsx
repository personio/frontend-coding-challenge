import { render, screen, userEvent, within } from "../test/utils";
import Filters, { positions } from "./Filters";

describe("Filters", () => {
  it("should render all the positions in the dropdown", async () => {
    render(<Filters />);
    const positionApplied = screen.getByRole("button", {
      name: "Position Applied",
    });

    await userEvent.click(positionApplied);

    const { getByRole } = within(screen.getByRole("listbox"));

    positions.forEach(({ label }) =>
      expect(getByRole("option", { name: label })).toBeInTheDocument()
    );
  });
});
