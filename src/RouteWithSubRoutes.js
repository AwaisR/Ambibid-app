import React, { Suspense, lazy } from 'react';
import { Route, useParams } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute.js/index';

const Home = lazy(() => import('pages/Signin/index'));
const RouteWithSubRoutes = (route) => (
  <>
  
    <ProtectedRoute
      path={route.path}
      component={route.component}
      // render={(props) => <route.component {...props} routes={route.routes} />}
    />
  </>
);

export default RouteWithSubRoutes;
