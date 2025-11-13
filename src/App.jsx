import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RomanConverterPage from './pages/RomanConverterPage'
import AgeCalculatorPage from './pages/AgeCalculatorPage';
import NextBirthdayPage from './pages/NextBirthdayPage';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/roman" replace />} />
          <Route path="/roman" element={<RomanConverterPage />} />
          <Route path="/age" element={<AgeCalculatorPage />} />
          <Route path="/birthday" element={<NextBirthdayPage />} />
        </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App
