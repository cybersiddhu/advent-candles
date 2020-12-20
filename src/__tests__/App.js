import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { App, Candle } from "../App";

test("Should show candle with right number", () => {
  const { queryByText } = render(<Candle description={"1"} />);
  expect(queryByText("1")).toBeInTheDocument();
  expect(queryByText("2")).not.toBeInTheDocument();
});

test("Should show description text", () => {
  const { queryByText } = render(<App />);
  const text = queryByText("Click on the candles to light the fire");
  expect(text).toBeInTheDocument();
});

test("Should show toggle fire when click on candle", () => {
  const { queryByText, getAllByRole } = render(<Candle description={"1"} />);
  expect(queryByText("🔥")).not.toBeInTheDocument();
  fireEvent.click(getAllByRole("button")[0]);
  expect(queryByText("🔥")).toBeInTheDocument();
  fireEvent.click(getAllByRole("button")[0]);
  expect(queryByText("🔥")).not.toBeInTheDocument();
});
