import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/global";

import ListingBeers from "./pages/ListingBeers";
import AddBeer from "./pages/AddBeer";

import BeersContext from "./context";

function App() {
  const [beersList, setBeersList] = useState();
  const [inputVal, setInputValue] = useState({
    id: 0,
    image_url: "",
    name: "",
    description: "",
  });

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <BeersContext.Provider
          value={{
            beersList,
            setBeersList,
            inputVal,
            setInputValue,
          }}
        >
          <Routes>
            <Route path="/" element={<ListingBeers />} />
            <Route path="/add-beer" element={<AddBeer />} />
          </Routes>
        </BeersContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
