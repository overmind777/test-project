import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Catalog from './pages/Catalog';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

import './styles/global.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
