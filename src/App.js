import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import SinglePage from "./pages/singlepage/SinglePage"
import New from "./pages/new/New"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInputs, userInput } from "./FormSource";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const{darkMode} =useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}/> 
        <Route path="login" element={<Login/>}/>
        <Route path="user">
          <Route index element={<List/>}/>
          <Route path=":userId" element={<SinglePage/>}/>
          <Route path="new" element={<New inputs = {userInput} title="Add New User"/>}/>
        </Route>
        <Route path="products">
          <Route index element={<List/>}/>
          <Route path=":productId" element={<SinglePage/>}/>
          <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
 