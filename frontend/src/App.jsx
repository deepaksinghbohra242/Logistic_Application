import './App.css'
import axios from 'axios';
import {Routes ,Route} from 'react-router-dom';
import {UserContext , UserContextProvider} from './ContextLayout';
import Layout from './Layout'

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout />} />
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
