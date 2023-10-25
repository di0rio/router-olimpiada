import { Outlet } from 'react-router-dom'
import './App.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


const App = () => {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default App
