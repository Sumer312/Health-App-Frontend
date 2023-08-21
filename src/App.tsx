import { Routes, Route, Router } from "@solidjs/router";
import "./index.css";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import { useContext } from "solid-js";
import { ThemeContext, theme_enum } from "./main";
import Footer from "./components/footer";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";
import UserInput from "./pages/user-input";
import Profile from "./pages/profile";
import Error from "./pages/error";

function App() {
  const [value, setValue] = useContext(ThemeContext);
  return (
    <div
      data-theme={value()}
      class={value() === theme_enum.LIGHT ? "bg-white" : "bg-black"}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/user-input/:type' element={<UserInput />} />
          <Route path='/auth/signup' element={<SignUp />} />
          <Route path='/*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
