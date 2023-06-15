import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Feed from './Feed';
import Teste from './Teste';
import TopBar from './TopBar';
import Plans from './Plans';
import Home from './Home';

export default function App (){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sign-in" element={<Login />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/feed" element={<Teste />}/>
          <Route path="/plans" element={<Plans />}/>
        </Routes>
      </BrowserRouter>
    </>
    )
}