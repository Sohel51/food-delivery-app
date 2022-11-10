import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateContainer from './Components/CreateContainer';
import Header from './Components/Header';
import MainContainer from './Components/MainContainer';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header></Header>
        <main className='mt-14 md:mt-20 p-5 md:px-12 md:py-2 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer></MainContainer>}></Route>
            <Route path='/CreateContainer' element={<CreateContainer></CreateContainer>}></Route>
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
