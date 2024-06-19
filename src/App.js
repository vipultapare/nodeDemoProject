
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes, createBrowserRouter } from 
'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <h1 className='text-center font-bold text-3xl p-4 bg-red-500'>E-Commerse DashBoard</h1>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<h1 className='text-xl p-4 bg-gray-300 text-center font-semibold'>Home Page</h1>}/>
        <Route path='/about' element={<h1 className='text-xl p-4 bg-gray-300 text-center font-semibold'>About Page</h1>}/>
        <Route path='/career' element={<h1 className='text-xl p-4 bg-gray-300 text-center font-semibold'>Career Page</h1>}/>
        <Route path='/signout' element={<h1 className='text-xl p-4 bg-gray-300 text-center font-semibold'>Signout Page</h1>}/>
        <Route path='/profile' element={<h1 className='text-xl p-4 bg-gray-300 text-center font-semibold'>Profile Page</h1>}/>
        <Route path='/signup' element={<SignUp />}/>
        
        
      </Routes>

      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
