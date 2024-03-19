import React, { useContext } from "react";
import { Usecontext1 } from "./UserContext/Usercontext1";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Feeds from "./Component/Feeds";
import Posts from "./Component/Posts";
import Users from "./Component/Users";
import Todos from "./Component/Todos";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Albums from "./Component/Albums";

export default function App() {
  const { flag, setFlag } = useContext(Usecontext1);
  //const {flag,setFlag} = useContext(hari)
  //const [flag,setFlag] = useState()
  return (
    <>
    <Router>
      {flag == 0 || flag == 2 ? <Login /> : <Home />}
      {/* {flag ===0 && <Login/>} */}
      {/* {flag ===1 && <Home/>} */}
      {flag === 2 && <Register />}

      
        
        <Routes>
          <Route path="/feeds" index element={<Feeds />}></Route>
          <Route path="/albums" element={<Albums />}></Route>
          <Route path="/posts"  element={<Posts />}></Route>
          <Route path="/users"  element={<Users />}></Route>
          <Route path="/todos"  element={<Todos />}></Route>
        </Routes>
      </Router>

    </>
  );
}
