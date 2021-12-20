import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';

const Navigation = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);

export default Navigation;
