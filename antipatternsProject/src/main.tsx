
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter, Route, Routes
} from "react-router-dom";
import Home from './pages/home';
import './index.css';
import Modules from './pages/questionsModules';
import Contents from './pages/contents';
import Contact from './pages/contact';
import AboutUs from './pages/aboutUs';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="">
          <Route index element={<Home />} />
        </Route>
        <Route path="modulos" element={<Modules language={'C'} />}>
        </Route>
        <Route path="modulosC" element={<Modules language={'C'} />}>
        </Route>
        <Route path="modulosPython" element={<Modules language={'Python'} />}>
        </Route>
        <Route path="conteudo" element={<Contents />}>
        </Route>
        <Route path="sobreNos" element={<AboutUs />}>
        </Route>
        <Route path="contato" element={<Contact />}>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

