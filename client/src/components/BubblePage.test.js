import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {fetchColors as mockFetchColors} from './fetchColors'

jest.mock("./fetchColors")

const colors = {data:[
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  },
]}

test("Fetches data and renders the bubbles", async () => {

  mockFetchColors.mockResolvedValueOnce(colors)

  render(<BubblePage />)
  let colorsArr = await screen.findAllByTestId(/color/i)
  expect(colorsArr).toHaveLength(3)
  
  let bubblesArr = await screen.findAllByTestId(/bubble/i)
  expect(bubblesArr).toHaveLength(3)

  screen.debug()
  
});



