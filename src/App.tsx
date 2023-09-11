import React from "react";
import NoImplement from "./component/page/NoImplement";
import NotFound from "./component/page/NotFound";
import UdGraphPage from "./component/page/UdGraphPage";
import DGraphPage from "./component/page/DGraphPage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import MainPage from "./component/page/MainPage";
import HelpPage from "./component/page/HelpPage";


const App = () => {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/udgraph" element={<UdGraphPage />} />
          <Route path="/dgraph" element={<DGraphPage />} />
          <Route path="/tree" element={<NoImplement />} />
          <Route path="/network" element={<NoImplement />} />
          <Route path="/help" element={<HelpPage/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
