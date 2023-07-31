import "./App.css";
import SolarSystemModel from "./components/solarsystem/js/SolarSystemModel";
import CSMain from "./components/constellation/js/CSMain";
import MainScreen from "./components/main/js/MainScreen";
import StoreMain from "./components/store/js/StoreMain";
import { Route, Routes } from "react-router";
import Basket from "./components/store/js/Basket";
import Login from "./components/user/js/Login";
import Mypage from "./components/user/js/Mypage";
import { AuthContextProvider } from "./util/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/SolarSystem" element={<SolarSystemModel />} />
        <Route path="/News" element={<CSMain />} />
        <Route path="/Store" element={<StoreMain />} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        {/* <Route path='/horoscope' element={<HsMain />} /> */}
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
