import { Routes, Route } from 'react-router-dom';
import { routes } from './RouteConfig';
import NotFound from '@/pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
