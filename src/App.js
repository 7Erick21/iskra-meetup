import AllMeetupsPage from './pages/AllMeetupsPage';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetup';
import { ROUTE_FAVORITES, ROUTE_HOME, ROUTE_NEW_MEETUP } from './utils/route';

import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <MainNavigation />
      <Layout>
        <Routes>
          <Route path={ROUTE_HOME} element={<AllMeetupsPage />} />
          <Route path={ROUTE_FAVORITES} element={<NewMeetupsPage />} />
          <Route path={ROUTE_NEW_MEETUP} element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
