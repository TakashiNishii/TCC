
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
        <Route path="modulos" element={<Modules />}>
        </Route>
        <Route path="conteudo" element={<Contents />}>
        </Route>
        <Route path="contato" element={<Contact />}>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

