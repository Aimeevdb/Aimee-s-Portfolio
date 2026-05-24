import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import SpectrumCare from './pages/SpectrumCare';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/spectrum-care" element={<SpectrumCare />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}