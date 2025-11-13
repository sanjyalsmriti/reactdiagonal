import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RomanConverterPage from './pages/RomanConverterPage'
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/roman" element={<RomanConverterPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
