
import MainPage from './Component/MainPage'
import {Routes,Route} from 'react-router-dom';
import MealInfo from './Component/MealInfo';

function App() {
  return (
   <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/:mealid' element={<MealInfo/>}/>
   </Routes>
  )
}

export default App
