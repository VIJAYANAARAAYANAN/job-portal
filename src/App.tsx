import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "@mantine/core/styles.css";
import { createTheme, Slider } from "@mantine/core";
import { MantineProvider } from "@mantine/core";

import "./App.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const theme = createTheme({
    colors: {
      "blue-ribbon": [
        "#eef5ff",
        "#d9e8ff",
        "#bcd8ff",
        "#8ebfff",
        "#599cff",
        "#3276ff",
        "#275df5",
        "#1440e1",
        "#1734b6",
        "#19328f",
        "#142057",
      ],
    },
  });
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
