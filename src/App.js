import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import useMouse from "./helpers/useMouse";
import Category from "./pages/Category";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";


function App() {
  const { x, y } = useMouse();
  const styleHover = window.screen.availWidth>1035  ? {
    display: "block",
    position: "absolute",
    top: y ,
    left: x ,
    pointerEvent:'none',
    width: 400,
  }:{
    display:'none'
  };
  return (
    <div className="App">
      <div className="pointer" style={styleHover}></div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/search' element={<SearchResults />}></Route>
        <Route exact path='/category' element={<Category />}></Route>
      </Routes>
    </div>
  );
}

export default App;
