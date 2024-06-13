import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from './routes/Coin';
import Coins from './routes/Coins';
import Chart from './routes/Chart';
import Price from './routes/Price';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Coins />} />
        <Route path={`${process.env.PUBLIC_URL}/:coinId`} element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
