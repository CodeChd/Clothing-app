import Home from "./routes/home/homepage";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () =>{
  return(
    <>
      <h1>I am on the shop</h1>
    </>
  )
}

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Navigation/>}>

      <Route index element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="sign-in" element={<SignIn/>}/>

      </Route>
    </Routes>
  );
};

export default App;









