import './App.css'
import { ConfigProvider, theme } from 'antd'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import PlaceForm from './pages/placeForm'

function App () {

  return (
    <ConfigProvider theme={{
      algorithm: theme.darkAlgorithm
    }}>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/:id' Component={PlaceForm} />
        <Route path='/new' Component={PlaceForm} />
      </Routes>
    </ConfigProvider>
  )
}

export default App
