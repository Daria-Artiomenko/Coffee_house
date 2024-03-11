import coffeesList from '../../data/data';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from "../pages/mainPage/MainPage";
import OurCoffee from '../pages/ourCoffee/OurCoffee';
import SingleCoffeePage from '../pages/singleCoffeePage/SingleCoffeePage';
import ForPleasure from '../pages/forPleasure/ForPleasure';
import Footer from '../footer/Footer';

const App = () => {

  const [data] = useState(coffeesList);

  return (
    <Router>
      <div className="App">
		<main>
			<Routes>
				<Route path='/' element={<MainPage data={data}/>}/>
				<Route path='/OurCoffee' element={<OurCoffee data={data}/>}/>
				<Route path='/OurCoffee/:coffeeId' element={<SingleCoffeePage data={data}/>}/>
				<Route path='/ForPleasure' element={<ForPleasure data={data}/>}/>
			</Routes>
		</main>
		<Footer/>
      </div>
    </Router>
  );
}

export default App;
