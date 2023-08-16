import { lazy } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Sidebar, Topbar } from 'widgets';

const HomePage = lazy(() => import('./HomePage'));

function Layout() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Topbar />
        <Outlet />
      </main>
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
