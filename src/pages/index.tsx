import { lazy } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Sidebar } from 'widgets';

const HomePage = lazy(() => import('./HomePage'));

function Layout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default Routing;
