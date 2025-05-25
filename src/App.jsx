
import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Loader from "./components/Loader";
const Navigation = lazy(() => import("./components/Navigation"));
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));

const App = () => {
  // const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} >
            <Route path="cast" element={<h1>Cast Details</h1>} />
            <Route path="reviews" element={<h1>Reviews</h1>} />
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
