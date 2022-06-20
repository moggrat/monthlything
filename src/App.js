import { BrowserRouter, Routes, Route } from "react-router-dom";

import Master from "./pages/master.js";
import Home from "./pages/home.js";
import Gallery from "./pages/gallery.js";
import NotFound from "./pages/404.js";

import './css/app.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />}>
            <Route path=":id"/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
