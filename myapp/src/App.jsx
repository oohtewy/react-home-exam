import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import MainPage from './Pages/MainPage'
import About from './Pages/About'
import Logging from './Pages/Logging'
import NoPage from './Pages/NoPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <MainPage /> } />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/Logging" element={<Logging />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;