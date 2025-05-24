
import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Loader from "./components/Loader";
const Navigation = lazy(() => import("./components/Navigation"));
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));

const App = () => {
  // const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<h1>Movie Details</h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
