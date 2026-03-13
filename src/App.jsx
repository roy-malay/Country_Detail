import CountryInput from './pages/CountryInput'
import CountryDetail from './pages/CountryDetail'
import {Route, Routes} from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<CountryInput />} />
        <Route path="country_detail/:country" element={<CountryDetail />} />
      </Routes>
    </>
  )
}

export default App
