import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';
import NotFound from './Pages/NotFound';

function App() {
  const Layout = lazy(() => import('./Layout/Layout'));
  const Home = lazy(() => import('./Pages/Home'));
  const Movies = lazy(() => import('./Pages/Movies'));
  const MoviePage = lazy(() => import('./Pages/MoviePage'));
  const Contact = lazy(() => import('./Pages/Contact'));
  const About = lazy(() => import('./Pages/About'));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Suspense fallback={<Loader />}>
              <Layout />
            </Suspense>} >   
            <Route index path='/' element={<Home />} />
            <Route path='movie' element={<Movies />} />
            <Route path='movie/:id' element={<MoviePage />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
