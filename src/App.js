import { BrowserRouter,Routes, Route,useNavigate,Redi } from 'react-router-dom';
import { useContext } from 'react';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/Auth-context';
function App() {
  const authCtx=useContext(AuthContext);
  const history=useNavigate();
  const fun = () =>{
    history('/');
  } 

  return (
    <Layout>
      {/* <BrowserRouter> */}
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          {!authCtx.isLoggedIn &&<Route path='/auth' element={<AuthPage />}/>}
          {authCtx.isLoggedIn &&<Route path='/profile'element={<UserProfile />}/>}
          {!authCtx.isLoggedIn &&<Route path='/profile'element={<AuthPage/>}/>}
          <Route path='*'element={<HomePage/>}/>

        </Routes>
      {/* </BrowserRouter> */}
    </Layout>
  );
}

export default App;
