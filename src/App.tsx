import './App.css'
import { Route, Routes } from "react-router-dom";
import { Head } from './Head';
import { NewList } from './NewList';


function App() {

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Head />}></Route>
        <Route path={"/2"} element={<NewList />}></Route>
      </Routes>
    </>
  )
}

export default App
