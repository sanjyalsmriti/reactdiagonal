import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RomanConverterPage from './pages/RomanConverterPage'
import AgeCalculatorPage from './pages/AgeCalculatorPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/roman" replace />} />
          <Route path="/roman" element={<RomanConverterPage />} />
          <Route path="/age" element={<AgeCalculatorPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
