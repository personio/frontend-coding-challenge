/* eslint-disable import/export */
import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

type Options = { route?: string };

function customRender(ui: React.ReactElement, options?: Options) {
  if (options?.route) {
    window.history.pushState({}, "Test page", options.route);
  }

  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => (
      <BrowserRouter>
        <QueryClientProvider client={new QueryClient()}>
          {children}
        </QueryClientProvider>
      </BrowserRouter>
    ),
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
