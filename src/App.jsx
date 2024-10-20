import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/private/login";
import Create from "./pages/private/create";
import Post from "./pages/sections/post[id]";
import NavBar from "./pages/sections/navBar";
import Layout from "./pages/_layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
