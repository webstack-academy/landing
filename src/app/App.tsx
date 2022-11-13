import React from 'react';
import './App.css';
import HomePage from './modules/home/pages/home.page';
import CookiesComponent from './components/molecules/cookies.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReferralPage from './modules/referral/pages/referral.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="referral" element={<ReferralPage />} />
        </Routes>
      </BrowserRouter>
      <CookiesComponent />
    </div>
  );
}

export default App;
