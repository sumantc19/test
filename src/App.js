import React from 'react';
// import './App.css';
import Todo from './axios/ToDo form/Todo';
// import { BrowserRouter, Routes,Route} from "react-router-dom"
// import Getituser from './axios/Getituser';
// import Addusers from './axios/Addusers';
// import Update from './axios/Update';

function App() {
  return (
   <>

   <Todo/>
     {/* <BrowserRouter>
       <Routes>
        <Route path='/' element={<Getituser/>}/>
        <Route path='/Addusers' element={<Addusers/>}/>
        <Route path='/Update/:id' element={<Update/>}/>
       </Routes>
     </BrowserRouter> */}
   </>
  );
}

export default App;
