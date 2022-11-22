
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter, Route, Routes
} from "react-router-dom";
import Home from './pages/home';
import './index.css';
import Modules from './pages/questionsModules';

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
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

