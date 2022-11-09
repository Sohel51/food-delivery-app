import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateContainer from './Components/CreateContainer';
import Header from './Components/Header';
import MainContainer from './Components/MainContainer';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence>
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header></Header>
        <main className='mt-24 p-8 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer></MainContainer>}></Route>
            <Route path='/createItem' element={<CreateContainer></CreateContainer>}></Route>
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
