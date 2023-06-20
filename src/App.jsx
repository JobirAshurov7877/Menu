import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Account, Catalog, CatalogDetail, Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog/" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CatalogDetail />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
