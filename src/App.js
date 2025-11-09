import './index.css';
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Body />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>

  );
}

export default App;