import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/global";

import ListingBeers from "./pages/ListingBeers";
import AddBeer from "./pages/AddBeer";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListingBeers />} />
          <Route path="/add-beer" element={<AddBeer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
