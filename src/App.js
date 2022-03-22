import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/global";

import ListingBeers from "./pages/ListingBeers";
import AddBeer from "./pages/AddBeer";
import DetailsBeer from "./pages/DetailsBeer";

import BeersContext from "./context";
import Header from "./components/Header";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [beersList, setBeersList] = useState();
  const [inputVal, setInputValue] = useState({
    id: 0,
    image_url: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
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
          <Header />
          <Routes>
            <Route path="/" element={<ListingBeers />} />
            <Route path="/cadastrar-cerveja" element={<AddBeer />} />
            <Route path="/detalhes-cerveja" element={<DetailsBeer />} />
          </Routes>
        </BeersContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
