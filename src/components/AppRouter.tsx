import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { defaultRouterConfig } from '../router/router';

const AppRouter = () => {
  return (
    <Routes>
      {defaultRouterConfig.map((route) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore sorry
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}

      <Route path='/*' element={<Navigate to='/error' replace />} />
    </Routes>
  );
};

export default AppRouter;
