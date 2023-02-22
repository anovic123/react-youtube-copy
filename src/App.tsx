import React, { Suspense } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Layout } from './Lauout/Layout';
import './utils/i18n';

function App() {
  return (
    <>
      <HashRouter>
        <Suspense fallback={'Loading...'}>
          <Layout />
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;