import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateContainer from './Components/CreateContainer';
import Header from './Components/Header';
import MainContainer from './Components/MainContainer';
import { AnimatePresence } from 'framer-motion';
import { useStateValue } from './Context/StateProvider';
import { getAllFoodITems } from './utils/firebaseFunction';
import { useEffect } from 'react';
import { actionType } from './Context/reducer';

function App() {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodITems()
    .then(data =>{
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
