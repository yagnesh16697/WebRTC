import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/shared/Navigation/Navigation";
import Authenticate from "./pages/Authenticate/Authenticate";
const isAuth = true;

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <GuestRoute path="/authenticate">
          <Authenticate />
        </GuestRoute>
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const GuestRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        <>
          isAuth ? (
          <Navigate
            to={{
              pathname: "/rooms",
              state: { from: location },
            }}
            replace={true}
          />
          ) : ( children )
        </>;
      }}
    ></Route>
  );
};

export default App;
