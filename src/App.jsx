import "./App.css";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Categories from "./components/pages/categories/index";
import Ships from "./components/pages/categories/ships";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import Planets from "./components/pages/categories/planets";
import Header from "./components/shared/header";
import Signup from "./components/pages/signup";


function App() {

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/categories" element={<Categories />}>
                   <Route path="/categories/ships" element={<Ships />} />
                   <Route path="/categories/planets" element={<Planets />} /> 
                </Route>
                <Route path="signup" element={<Signup />} />
                <Route path="/*" element={<Navigate replace to="/" />} />
            </Routes>
        </div>
    );
}

export default App;
